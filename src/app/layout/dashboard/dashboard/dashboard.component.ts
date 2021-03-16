import { Component, OnInit } from '@angular/core';
import {faChevronRight, faHeart} from '@fortawesome/free-solid-svg-icons';
import {CompositionService} from '../../core/services/composition.service';
import {GeneralService} from '../../core/services/general.service';
import {GenreService} from '../../core/services/genre.service';
import {Genre} from '../../core/models/genre';
import {Composition} from '../../core/models/composition';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  faHeart = faHeart;
  faArrowRight = faChevronRight;

  genresToDisplay = ['Superhero', 'Thriller'];

  genreOne: Genre;
  genreTwo: Genre;

  compositionsOne: Composition[];
  compositionsTwo: Composition[];

  constructor(private genreService: GenreService, private compositionService: CompositionService) { }

  ngOnInit(): void {
    this.getCompositions();
  }

  getCompositions(): void {
    this.compositionService.getCompositions().subscribe(res => {
      this.getGenres(res);
    });
  }

  getGenres(compositions: Composition[]): void {
    this.genreService.getGenres().subscribe(res => {
      this.genreOne = this.genreService.getGenreByValue(res, this.genresToDisplay[0]);
      this.genreTwo = this.genreService.getGenreByValue(res, this.genresToDisplay[1]);

      this.compositionsOne = this.compositionService.getCompositionsByGenreId(compositions, this.genreOne);
      this.compositionsTwo = this.compositionService.getCompositionsByGenreId(compositions, this.genreTwo);
      console.log('One:', this.genreOne, 'Two:', this.genreTwo);
      console.log('One:', this.compositionsOne, 'Two:', this.compositionsTwo);
    });
  }
}
