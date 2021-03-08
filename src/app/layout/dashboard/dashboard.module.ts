import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompositionTabComponent } from './composition-tab/composition-tab.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { CompositionTabItemComponent } from './composition-tab/composition-tab-item/composition-tab-item.component';
import {DisplayDirective} from '../core/directives/display.directive';
import {SortArrayPipe} from '../core/pipes/sortArray.pipe';


@NgModule({
  declarations: [
    DashboardComponent,
    CompositionTabComponent,
    CompositionTabComponent,
    CompositionTabItemComponent,
    DisplayDirective,
    SortArrayPipe
  ],
    imports: [
      CommonModule,
      DashboardRoutingModule,
      IvyCarouselModule,
      FontAwesomeModule,
    ]
})
export class DashboardModule { }
