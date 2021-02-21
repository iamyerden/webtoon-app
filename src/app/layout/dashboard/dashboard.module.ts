import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DailyScheduleComponent } from './daily-schedule/daily-schedule.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { DayScheduleComponent } from './daily-schedule/day-schedule/day-schedule.component';


@NgModule({
  declarations: [DashboardComponent, DailyScheduleComponent, DailyScheduleComponent, DayScheduleComponent],
    imports: [
      CommonModule,
      DashboardRoutingModule,
      IvyCarouselModule,
      FontAwesomeModule
    ]
})
export class DashboardModule { }
