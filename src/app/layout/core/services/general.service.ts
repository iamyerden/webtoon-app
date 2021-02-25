import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient) {

  }

  getStatuses(): Observable<any> {
    return this.http.get('./assets/statuses.json');
  }

  getWeekDays(): Observable<any> {
    return this.http.get('./assets/week.json');
  }

  getGenres(): Observable<any> {
    return this.http.get('./assets/genres.json');
  }
}
