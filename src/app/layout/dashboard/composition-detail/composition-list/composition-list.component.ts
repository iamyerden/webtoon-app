import {Component, Input, OnInit} from '@angular/core';
import {EpisodeService} from '../../../core/services/episode.service';
import {Episode} from '../../../core/models/episode';

@Component({
  selector: 'app-composition-list',
  templateUrl: './composition-list.component.html',
  styleUrls: ['./composition-list.component.css']
})
export class CompositionListComponent implements OnInit {

  @Input() currentComposition;

  episodes: Episode[] = [];

  numbers: any[];

  constructor(private episodeService: EpisodeService) { }

  ngOnInit(): void {
    this.getEpisodes();
    this.numbers = Array(10).fill(0).map((x, i) => i).reverse();
  }

  getEpisodes(): void {
    this.episodeService.getEpisodes().subscribe(res => {
      this.episodes = this.episodeService.getEpisodesByCompositionId(res, this.currentComposition.id);
      console.log(this.episodes);
    });
  }

}
