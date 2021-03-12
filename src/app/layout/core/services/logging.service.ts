import {Injectable} from '@angular/core';

@Injectable()
export class LoggingService {

  log(message: string): void {
    console.log('Logging.service log message: ',
      message);
  }
}
