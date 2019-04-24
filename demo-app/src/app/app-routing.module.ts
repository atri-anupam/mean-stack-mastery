import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {  SecondComponentComponent } from '../app/second-component/second-component.component';
import { FirstComponentComponent } from '../app/first-component/first-component.component';

const routes: Routes = [
  {
    path: 'sc',
    component: SecondComponentComponent
  },
  {
    path: 'fc',
    component: FirstComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
