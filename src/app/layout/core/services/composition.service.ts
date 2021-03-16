import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LoggingService} from './logging.service';
import {Composition} from '../models/composition';
import {Genre} from '../models/genre';

@Injectable({
  providedIn: 'root'
})
export class CompositionService {

  constructor(private http: HttpClient, private loggingService: LoggingService) {
  }

  getCompositions(): Observable<any> {
    return this.http.get('./assets/fake-db/compositions.json');
  }

  getCompositionByWeekDay(weekDay: string): Observable<any> {
    // TODO
    return null;
  }

  getCompositionByTitleCode(compositions: Composition[], titleCode: string): any {
    for (const composition of compositions) {
      if (composition.titleCode === titleCode) {
        this.loggingService.log('Found item by Id!');
        return composition;
      }
    }
    return null;
  }

  getCompositionsByGenreId(compositions: Composition[], genre: Genre): any {
    const resultCompositions: Composition[] = [];
    for (const composition of compositions) {
      if (composition.genreId === genre.id) {
        composition.genre = genre;
        resultCompositions.push(composition);
      }
      if (resultCompositions.length === 4) {
        return resultCompositions;
      }
    }
    return resultCompositions;
  }
}
