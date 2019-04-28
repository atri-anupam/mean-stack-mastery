import { Component } from '@angular/core';

import { CrudService } from './crud.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lets See';
  result;

  name = 'Anupam';

  constructor(private cs: CrudService) {}
  
  receiveData() {
    this.cs.getData()
    .subscribe((data) => {
      this.result = data;
      console.log(data);
    });
  }
}
