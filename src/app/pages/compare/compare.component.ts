import { Component, OnInit } from '@angular/core';
import { ChoiseEvent } from 'src/app/shared/poke-list-compare/interface';
import { PokeApiService } from 'src/app/service/poke-api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  public firstChosen:number = 0
  public secondChosen:number = 0
  public firstChosenSum:number = 0
  public secondChosenSum:number = 0
  public vs:boolean = false
  public setAllPokemons: any;
  public apiError: boolean = false;
  public enviroments:any = environment
  public battleStart:boolean = false
  public blinkScreen:boolean = false

  private winner!:number

  constructor (private PokeApiService: PokeApiService) {
  }

  public handleChoises(choiseEvent:ChoiseEvent) {
    if(choiseEvent.choiseNumber == 0) {
      this.firstChosen = choiseEvent.pokeId
    }
    else{
      this.secondChosen = choiseEvent.pokeId
    }
    console.log(this.firstChosen==this.secondChosen)
    return this.firstChosen!= 0 && this.secondChosen!=0 && this.firstChosen != this.secondChosen ? this.vs=true : this.vs=false
  }

  public async handleBattle() {
    const audio = new Audio
    audio.src = '../../../assets/audio/pokeBattle.mp3'
    audio.volume = 0.2
    await audio.play()
    this.blinkScreen = true
    await new Promise((resolve) => setTimeout(resolve,3000))
    this.battleStart = true
    this.firstChosenSum>this.secondChosenSum ? this.winner = this.firstChosen : this.firstChosenSum<this.secondChosenSum ? this.winner = this.secondChosen : this.winner = -1

  }

  public finishBattle(){
    if(this.winner == this.firstChosen){
      
    }
    if(this.winner == this.secondChosen){

    }
    else{

    }
  }



  ngOnInit(): void {
    this.PokeApiService.apiListAllPokemon.subscribe({
      next: (res) =>{
      this.setAllPokemons = res.results
      },
      error: () => this.apiError = true
    })
}


}
