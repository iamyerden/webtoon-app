import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GeneralService} from '../../core/services/general.service';

@Component({
  selector: 'app-composition-tab',
  templateUrl: './composition-tab.component.html',
  styleUrls: ['./composition-tab.component.css']
})
export class CompositionTabComponent implements OnInit {

  @Input() tabInput;
  @Input() tabSize;

  tab: string;
  chosenTabArr: any[];
  chosenTab: any;
  hovered: number;

  originals: any[] = [];
  week: any[] = [];
  genres: any[] = [];

  constructor(private route: ActivatedRoute,
              private generalService: GeneralService) {
  }

  ngOnInit(): void {
    this.loadGeneralData();
  }

  loadGeneralData(): void {
    this.generalService.getStatuses().subscribe(res1 => {
      this.originals = res1;
      this.generalService.getWeekDays().subscribe(res2 => {
        this.week = res2;
        this.generalService.getGenres().subscribe(res3 => {
          this.genres = res3;

          // Define tab by url param
          this.route.params.subscribe(
            params => {
              this.tab = params.tab;
              this.defineTab();
            }
          );
        });
      });
    });
  }

  defineTab(): void {
    if (!this.tab) {
      this.tab = this.tabInput;
    }

    if (this.tab === 'schedule') {
      this.displayTab(this.week);
    } else if (this.tab === 'genre') {
      this.displayTab(this.genres);
    } else {
      // TODO
      this.displayTab(this.originals);
    }
  }

  displayTab(tabArray: any): void {
    this.chosenTabArr = tabArray;
    for (const item of this.chosenTabArr) {
      if (item.active === true) {
        this.chooseTabItem(item);
        break;
      }
    }
  }

  chooseTabItem(tabItem: any): void {
    this.chosenTab = tabItem;

    this.removeClasses();
    this.activateClass(tabItem);
  }

  activateClass(tabItem): void {
    tabItem.active = !tabItem.active;
  }

  removeClasses(): void {
    for (const item of this.chosenTabArr) {
      item.active = false;
    }
  }

  activeStyle(item: any): void {
    if (this.tab === 'genre') {

    }
  }
}
