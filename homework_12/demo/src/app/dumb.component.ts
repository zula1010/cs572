import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dumb',
  template: `
  <ul   appIsVisible [visible] = true>
  <li  appMakeBigger *ngFor = "let obj of myObjs" >
  {{obj}}
  </li>
  </ul>
  `,
  styleUrls: ['./dumb.component.css']
})
export class DumbComponent implements OnInit {
  @Input() myObjs;
  constructor() { }

  ngOnInit() {

  }

}
