import { Component, OnInit } from '@angular/core';
import {faChevronRight, faHeart} from '@fortawesome/free-solid-svg-icons';

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

  getGenreCompositions(): void {

  }
}
