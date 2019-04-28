import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor() { }
  myValue = 'hi how are you';
  name= 'my name';
  showName = false;
  myList = [1,2,3,4,5,6,7,8,9];
  
  ngOnInit() {
  }

}
