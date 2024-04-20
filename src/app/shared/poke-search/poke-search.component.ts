import { Component, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.css']
})
export class PokeSearchComponent {

  public enviroments = environment

  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter


  public search(value:string){
    this.emmitSearch.emit(value)
  }
}
