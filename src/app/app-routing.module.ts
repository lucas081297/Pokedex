import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { CompareComponent } from './pages/compare/compare.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'compare', component: CompareComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
