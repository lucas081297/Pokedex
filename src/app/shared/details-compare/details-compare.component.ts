import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-details-compare',
  templateUrl: './details-compare.component.html',
  styleUrls: ['./details-compare.component.css']
})
export class DetailsCompareComponent implements OnInit, OnChanges,AfterViewInit {

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon'
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species'
  private compareSection!: Element
  private playAudio(path:string) {
    var audio = new Audio(path);
    try {
      setTimeout(() => {
        audio.volume = 0.1;
        audio.play();
      }, 600);
    } catch (err) {
    }
  }

  public pokemon :any;
  public isLoading: boolean = false;
  public apiError: boolean = false;
  public enviroments:any = environment
  public totalStats(): number{
    const sum = this.pokemon[0].stats.reduce((acc:number,stats:any)=> {
      return acc + stats.base_stat
    },0)
    this.detailsEvent.emit(sum)
    return sum
  }

  @ViewChildren('pokestats') public pokestats!: any

  @Input() public id!:number
  @Input() public startBattle:boolean = true
  @Input() public winner!:number

  @Output() detailsEvent = new EventEmitter<number>()
  @Output() endBattle = new EventEmitter<boolean>()


  constructor(private pokeApiService:PokeApiService ){}

  get getPokemon(){
    const pokemon = this.pokeApiService.apiGetPokemons(`${this.urlPokemon}/${this.id}`)
    const name = this.pokeApiService.apiGetPokemons(`${this.urlName}/${this.id}`)

    return forkJoin([pokemon, name]).subscribe({
      next: (res) => {
        this.pokemon = res
        this.isLoading = true
        this.playAudio(res[0].cries.latest)
        this.totalStats()
      },
      error: () => this.apiError = true
    })
  }


  async handleBattle(value:any){
    try{
      const listArray = value.querySelector('ol').getElementsByTagName('li')
      for(let element of listArray){
        element.classList.remove('hidden')
        element.classList.add('fadefw')
        await new Promise((resolve) => setTimeout(resolve,2000))
      }
      this.endBattle.emit(true)
    }
    catch{

    }

  }

  sendTrophy(target:Element){
    target.classList.remove('hidden')
    target.classList.add('fadefw')
  }



  ngOnInit(): void {
      this.getPokemon;
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngAfterViewInit(): void {
    this.pokestats.changes.subscribe((comps: QueryList<any>)=>{
      this.compareSection = comps.first.nativeElement
      if(this.startBattle){
        this.handleBattle(this.compareSection)
      }
    })
  }

}
