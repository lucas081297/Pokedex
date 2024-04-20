import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { RouterModule } from '@angular/router';
import { PokeListCompareComponent } from './poke-list-compare/poke-list-compare.component';
import { DetailsCompareComponent } from './details-compare/details-compare.component';



@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
    PokeListCompareComponent,
    DetailsCompareComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PokeHeaderComponent,
    PokeListComponent,
    PokeListCompareComponent,
    DetailsCompareComponent
  ]
})
export class SharedModule { }
