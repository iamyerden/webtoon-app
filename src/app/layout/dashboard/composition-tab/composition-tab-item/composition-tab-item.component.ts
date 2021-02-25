import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {CompositionService} from '../../../core/services/composition.service';
import {faHeart} from '@fortawesome/free-solid-svg-icons/faHeart';
import {Composition} from '../../../core/models/composition';

@Component({
  selector: 'app-composition-tab-item',
  templateUrl: './composition-tab-item.component.html',
  styleUrls: ['./composition-tab-item.component.css']
})
export class CompositionTabItemComponent implements OnInit, OnChanges {

  @Input() tabItem;
  @Input() tabSize;

  faHeart = faHeart;

  compositions: Composition[] = [];
  compositionsByTab: Composition[] = [];

  constructor(private compositionService: CompositionService) { }

  ngOnInit(): void {
    this.getCompositions();
  }

  ngOnChanges(): void {
    this.getCompositionsByTabItem();
  }

  getCompositions(): void {
    this.compositionService.getCompositions().subscribe(res => {
      this.compositions = res;
      this.getCompositionsByTabItem();
    });
  }

  getCompositionsByTabItem(): void {
    this.compositionsByTab = [];
    for (const item of this.compositions) {
      console.log(this.tabItem?.value.toLowerCase());
      if (item.publishWeek.toLowerCase() === this.tabItem?.value.toLowerCase()
        || item.genre.toLowerCase() === this.tabItem?.value.toLowerCase()
        || item.status.toLowerCase() === this.tabItem?.value.toLowerCase()) {
        this.compositionsByTab.push(item);
      }
    }

    console.log(this.compositionsByTab);

    if (this.tabSize) {
      this.compositionsByTab = this.compositionsByTab.slice(0, this.tabSize);
    }

    console.log(this.compositionsByTab);

  }
}
