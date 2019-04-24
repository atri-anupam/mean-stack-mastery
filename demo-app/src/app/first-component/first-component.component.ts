import { Component, OnInit } from '@angular/core';


import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {


  name= 'Anupam';
  pplList = [];

  constructor(private getData: GetDataService) { }

  //creating a function to get the data from the service
  getList(): void {
  }


  ngOnInit() {
    this.getList();
  }

}
