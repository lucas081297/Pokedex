import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, AfterViewInit {

  public pokemon :any;
  public isLoading: boolean = false;
  public apiError: boolean = false;

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon'
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species'
  public enviroments:any = environment
  private playAudio(path:string) {
    var audio = new Audio(path);
    //audio.type = 'audio/wav';

    try {
      setTimeout(() => {
        audio.volume = 0.1;
        audio.play();
      }, 600);
    } catch (err) {
      console.log('Failed to play...' + err);
    }
  }

  constructor(
    private activatedRoute:ActivatedRoute,
    private pokeApiService:PokeApiService ){}

  get getPokemon(){
    const id = this.activatedRoute.snapshot.params['id'];
    const pokemon = this.pokeApiService.apiGetPokemons(`${this.urlPokemon}/${id}`)
    const name = this.pokeApiService.apiGetPokemons(`${this.urlName}/${id}`)

    return forkJoin([pokemon, name]).subscribe({
      next: (res) => {
        this.pokemon = res
        this.isLoading = true
        this.playAudio(res[0].cries.latest)
      },
      error: () => this.apiError = true
    })
  }

  ngOnInit(): void {
      this.getPokemon;
  }

  ngAfterViewInit():void {

  }

}
