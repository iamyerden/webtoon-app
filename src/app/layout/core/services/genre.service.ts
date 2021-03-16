import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Genre} from '../models/genre';
import {LoggingService} from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http: HttpClient, private loggingService: LoggingService) {
  }

  getGenres(): Observable<any> {
    return this.http.get('./assets/fake-db/genres.json');
  }

  getGenreById(genres: Genre[], genreId: number): Genre {
    for (const genre of genres) {
      if (genre.id === genreId) {
        this.loggingService.log('Found genre by id ' + genreId);
        return genre;
      }
    }
    return null;
  }

  getGenreByValue(genres: Genre[], genreValue: string): Genre {
    for (const genre of genres) {
      if (genre.value === genreValue) {
        this.loggingService.log('Found genre by value ' + genreValue);
        return genre;
      }
    }
    return null;
  }
}
