import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompareComponent } from './compare/compare.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'compare', component: CompareComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
