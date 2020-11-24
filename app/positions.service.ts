import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

@Injectable()
export class PositionsService {
  getPositions(): Observable<any> {
    return new Observable(observer => {

      setTimeout(() => {
        localStorage.clear();
        if (localStorage.getItem('positions')) {
          observer.next(JSON.parse(localStorage.getItem('positions')))

        } else { //default data

          observer.next([
            { cols: 6, rows: 8, y: 0, x: 6 },
            { cols: 6, rows: 8, y: 0, x: 0 },
            { cols: 6, rows: 8, y: 8, x: 0 },
            { cols: 6, rows: 8, y: 8, x: 6 },
            { cols: 6, rows: 8, y: 0, x: 12 }
          ]);

        }
      }, 1000);
    });
  }
  savePositions(positions) {
    localStorage.setItem('positions', JSON.stringify(positions))
  }
}