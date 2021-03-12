import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Genre} from '../models/genre';
import {LoggingService} from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  genres: Genre[] = null;

  constructor(private http: HttpClient, private loggingService: LoggingService) {
    this.getGenres().subscribe(res => {
      this.genres = res;
      this.loggingService.log('Got genres!');
    });
  }

  getGenres(): Observable<any> {
    return this.http.get('./assets/genres.json');
  }

  getGenreById(genreId: number): Genre {
    for (const genre of this.genres) {
      if (genre.id === genreId) {
        this.loggingService.log('Found genre by id ' + genreId);
        return genre;
      }
    }
    return null;
  }
}
