import { Component, OnInit } from '@angular/core';
import {faChevronRight, faHeart} from '@fortawesome/free-solid-svg-icons';
import {CompositionService} from '../../core/services/composition.service';
import {GeneralService} from '../../core/services/general.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  faHeart = faHeart;
  faArrowRight = faChevronRight;

  constructor() { }

  ngOnInit(): void {
  }

}
