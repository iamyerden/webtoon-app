import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LoggingService} from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient, private loggingService: LoggingService) {

  }

  getStatuses(): Observable<any> {
    return this.http.get('./assets/statuses.json');
  }

  getWeekDays(): Observable<any> {
    return this.http.get('./assets/week.json');
  }

  getItemById(arr: any, id: number): any {
    for (const item of arr) {
      if (item.id === id) {
        this.loggingService.log('Found item by Id!');
        return item;
      }
    }
    return null;
  }
}
