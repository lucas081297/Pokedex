import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  public getAllPokemons: any;
  private setAllPokemons: any;
  public apiError: boolean = false;
  public enviroments:any = environment

  constructor (private PokeApiService: PokeApiService) {
  }

  ngOnInit(): void {
      this.PokeApiService.apiListAllPokemon.subscribe({
        next: (res) =>{
        this.setAllPokemons = res.results
        this.getAllPokemons = this.setAllPokemons
      },
        error: () => this.apiError = true
      })
  }

  public getSearch (value:string){
    const filter = this.setAllPokemons.filter( (res:any)=>{
      return !res.name.indexOf(value.toLowerCase())
    })
    this.getAllPokemons = filter
  }

}
