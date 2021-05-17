import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CompositionService} from '../../core/services/composition.service';
import {GenreService} from '../../core/services/genre.service';
import {Composition} from '../../core/models/composition';

import {faInfoCircle, faUserCheck, faStar} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-composition-detail',
  templateUrl: './composition-detail.component.html',
  styleUrls: ['./composition-detail.component.css']
})
export class CompositionDetailComponent implements OnInit {

  titleCode: string;
  compositions: Composition[];
  currentComposition: Composition;

  faInfoCircle = faInfoCircle;
  faUserCheck = faUserCheck;
  faStar = faStar;

  constructor(private route: ActivatedRoute,
              private compositionService: CompositionService,
              private genreService: GenreService) { }

  ngOnInit(): void {
    this.titleCode = this.route.snapshot.paramMap.get('titleCode');
    console.log(this.titleCode);
    this.getCurrentCompositionData();
  }

  getCurrentCompositionData(): void {
    this.compositionService.getCompositions().subscribe(res => {
      this.compositions = res;
      this.compositionService.getCompositionByTitleCode(this.titleCode).subscribe(resByTitle => {
        this.currentComposition = resByTitle[0];
        this.genreService.getGenreById(this.currentComposition.genreId).subscribe(resGenre => {
          this.currentComposition.genre = resGenre[0];
        });
      });
    });
  }

}
