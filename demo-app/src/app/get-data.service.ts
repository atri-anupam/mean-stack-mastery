import { Injectable} from '@angular/core';
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

  getPeopleList() {
    //suppose this gets the data from the backend
  }
}
