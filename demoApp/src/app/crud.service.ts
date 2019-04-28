import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }
  uri = 'http://localhost:3000/users';
  
  getData(){
    return this.http.get(this.uri);
  }
}
