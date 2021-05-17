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
    return this.http.get('http://localhost:3000/episodes');
  }

  getEpisodesByCompositionId(compositionId: number): any {
    return this.http.get(`http://localhost:3000/episodes?compositionId=` + compositionId);
  }
}
