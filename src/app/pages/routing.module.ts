import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompareComponent } from './compare/compare.component';
import { AnalyticsComponent } from './analytics/analytics.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'compare', component: CompareComponent},
  {path: 'analytics', component: AnalyticsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
