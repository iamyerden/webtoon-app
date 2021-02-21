import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompositionService {

  constructor(private http: HttpClient) {

  }

  getCompositions(): Observable<any> {
    return this.http.get('./assets/fake-db.json');
  }

  getCompositionByWeekDay(weekDay: string): Observable<any> {
    return null;
  }
}
