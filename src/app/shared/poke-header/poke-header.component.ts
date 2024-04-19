import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-poke-header',
  templateUrl: './poke-header.component.html',
  styleUrls: ['./poke-header.component.css']
})
export class PokeHeaderComponent {

  public enviroments = environment


}
