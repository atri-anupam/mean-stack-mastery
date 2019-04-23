import { Injectable, of } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  pplList = [
    'anupam',
    'anurag',
    'manisha',
    'sadhna',
    'ashok',
    'abhilasha'
  ];
  constructor() { }

  getPeopleList(): Observable<[]> {
    //suppose this gets the data from the backend
    return of (this.pplList);
  }
}
