import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-schedule',
  templateUrl: './daily-schedule.component.html',
  styleUrls: ['./daily-schedule.component.css']
})
export class DailyScheduleComponent implements OnInit {

  week = [
    {
      day: 'Mon',
      active: true
    },
    {
      day: 'Tue',
      active: false
    },
    {
      day: 'Wed',
      active: false
    },
    {
      day: 'Thu',
      active: false
    },
    {
      day: 'Fri',
      active: false
    },
    {
      day: 'Sat',
      active: false
    },
    {
      day: 'Sun',
      active: false
    }];

  chosenWeekDay: string;

  constructor() { }

  ngOnInit(): void {
    for (const item of this.week) {
      if (item.active === true) {
        this.chooseWeekDay(item);
        break;
      }
    }
  }

  chooseWeekDay(day: any): void {
    this.chosenWeekDay = day;

    this.removeClasses();
    this.activateClass(day);
  }

  activateClass(day): void {
    day.active = !day.active;
  }

  removeClasses(): void {
    for (const item of this.week) {
      item.active = false;
    }
  }
}
