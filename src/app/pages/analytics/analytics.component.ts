import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';
import { PokeDataApiService } from 'src/app/service/poke-data-api.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  constructor(
    private PokeApiService : PokeApiService,
    private PokeDataApiService: PokeDataApiService
  ){}

  public isLoaded:boolean = false;
  public apiError:boolean = false;
  public getAllPokemons:Array<any> = [];
  public setTopPokemons:Array<any> = [];
  public setChampionsPokemon:Array<any> = [];

  private readonly url:string = 'https://pokeapi.co/api/v2/pokemon/'

  public async handleImages() {
    for(let pokemon of this.setTopPokemons){
      this.PokeApiService.apiGetPokemons(this.url+pokemon.id).subscribe({
        next: (res) => {
          //console.log(res)
          Object.assign(pokemon,res)
        }
      })
    }
    console.log(this.setTopPokemons)
    }

   ngOnInit(): void {
    this.PokeDataApiService.apiGetPokemons.subscribe({
      next: (res) => {
        this.getAllPokemons = res
        this.getAllPokemons.sort((a:any,b:any)=>{
          return b.pokemonData - a.pokemonData;
        })
        this.setTopPokemons = this.getAllPokemons.slice(0,8)
        this.handleImages()
        this.setChampionsPokemon = this.setTopPokemons.slice(0,3)
        this.setTopPokemons = this.setTopPokemons.slice(3,8)
        console.log(this.setChampionsPokemon)
      },
      error: () => this.apiError = true
    })
  }

}
