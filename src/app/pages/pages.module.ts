import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';
import { CompareComponent } from './compare/compare.component';
import { AnalyticsComponent } from './analytics/analytics.component';



@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    CompareComponent,
    AnalyticsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ],
})
export class PagesModule { }
