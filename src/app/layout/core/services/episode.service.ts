import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LoggingService} from './logging.service';
import {Episode} from '../models/episode';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private http: HttpClient, private loggingService: LoggingService) {
  }

  getEpisodes(): Observable<any> {
    return this.http.get('./assets/fake-db/episodes.json');
  }

  getEpisodesByCompositionId(episodes: Episode[], compositionId: number): any {
    let foundEpisodes: Episode[] =  [];
    for (const episode of episodes) {
      if (episode.compositionId === compositionId) {
        foundEpisodes.push(episode);
      }
    }
    return foundEpisodes;
  }
}
