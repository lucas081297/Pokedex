import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ChoiseEvent } from './interface';

@Component({
  selector: 'app-poke-list-compare',
  templateUrl: './poke-list-compare.component.html',
  styleUrls: ['./poke-list-compare.component.css']
})

export class PokeListCompareComponent implements OnInit {


  @Output() choiseEvent = new EventEmitter<ChoiseEvent>();
  @Input() pokeChoise:number = 0
  @Input() public getAllPokemons: any;

  public setAllPokemons: any;
  public pokeTarget:any = ''


  ngOnInit(): void {
  }

  public getSearch (value:string){
    const filter = this.setAllPokemons.filter( (res:any)=>{
      return !res.name.indexOf(value.toLowerCase())
    })
    this.getAllPokemons = filter
  }

  public pokeSelect (target:any): void{
      try{
        this.pokeTarget.style.outline = "none"
      }
      catch(e){
      }
      finally{
        this.pokeTarget = target
      }
    target.style.outline = "solid"
    if(this.pokeChoise==0){
      target.style.outlineColor = "#00cf006b"
    }
    else{
      target.style.outlineColor = "#ff0000a1"
    }

    target.style.outlineWidth = "10px"
    try{
      this.choiseEvent.emit({choiseNumber: this.pokeChoise, pokeId: this.pokeTarget.id})
    }
    catch{
    }
  }

}
