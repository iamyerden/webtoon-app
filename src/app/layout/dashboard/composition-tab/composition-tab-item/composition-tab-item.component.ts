import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {CompositionService} from '../../../core/services/composition.service';
import {faHeart} from '@fortawesome/free-solid-svg-icons/faHeart';
import {Composition} from '../../../core/models/composition';
import {GenreService} from '../../../core/services/genre.service';

@Component({
  selector: 'app-composition-tab-item',
  templateUrl: './composition-tab-item.component.html',
  styleUrls: ['./composition-tab-item.component.css']
})
export class CompositionTabItemComponent implements OnInit, OnChanges {

  @Input() tabItem;
  @Input() tabSize;

  check = [1, 2, 3, 4, 5];

  faHeart = faHeart;

  compositions: Composition[] = [];
  compositionsByTab: Composition[] = [];

  genres: any[];

  constructor(private compositionService: CompositionService, private genreService: GenreService) { }

  ngOnInit(): void {
    this.genreService.getGenres().subscribe(res => {
      this.genres = res;

      this.getCompositions();
    });
  }

  ngOnChanges(): void {
    this.getCompositionsByTabItem();
  }

  getCompositions(): void {
    this.compositionService.getCompositions().subscribe(res => {
      this.compositions = res;
      this.getCompositionGenres();
    });
  }

  getCompositionGenres(): void {
    for (const item of this.compositions) {
      item.genre = this.genreService.getGenreById(item.genreId);
    }
    this.getCompositionsByTabItem();
  }

  getCompositionsByTabItem(): void {
    this.compositionsByTab = [];
    for (const item of this.compositions) {
      if (item.publishWeek.toLowerCase() === this.tabItem?.value.toLowerCase()
        || item.genre?.value.toLowerCase() === this.tabItem?.value.toLowerCase()
        || item.status.toLowerCase() === this.tabItem?.value.toLowerCase()) {
        this.compositionsByTab.push(item);
      }
    }

    if (this.tabSize) {
      this.compositionsByTab = this.compositionsByTab.slice(0, this.tabSize);
    }

  }

}
