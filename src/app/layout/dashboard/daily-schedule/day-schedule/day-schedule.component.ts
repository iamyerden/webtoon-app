import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {CompositionService} from '../../../core/services/composition.service';
import {faHeart} from '@fortawesome/free-solid-svg-icons/faHeart';
import {Composition} from '../../../core/models/composition';

@Component({
  selector: 'app-day-schedule',
  templateUrl: './day-schedule.component.html',
  styleUrls: ['./day-schedule.component.css']
})
export class DayScheduleComponent implements OnInit, OnChanges {

  @Input() weekDay;

  faHeart = faHeart;

  compositions: Composition[] = [];
  compositionsByWeekDay: Composition[] = [];

  constructor(private compositionService: CompositionService) { }

  ngOnInit(): void {
    this.getCompositions();
  }

  ngOnChanges(): void {
    console.log(this.weekDay);
    this.getCompositionsByWeekDay();
  }

  getCompositions(): void {
    this.compositionService.getCompositions().subscribe(res => {
      this.compositions = res;
      console.log(this.compositions);
      this.getCompositionsByWeekDay();
    });
  }

  getCompositionsByWeekDay(): void {
    this.compositionsByWeekDay = [];
    for (const item of this.compositions) {
      if (item.publishWeek === this.weekDay.day) {
        this.compositionsByWeekDay.push(item);
      }
    }
    console.log(this.compositionsByWeekDay);
  }
}
