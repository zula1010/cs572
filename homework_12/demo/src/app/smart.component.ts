import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: '<app-dumb [myObjs]="myObjs" ></app-dumb>',
  styleUrls: ['./smart.component.css']
})
export class SmartComponent implements OnInit {
  myObjs = ['Julia', 123, 'aaa', 'testing', 222];
  constructor() { }

  ngOnInit() {
  }

}
