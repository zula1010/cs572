import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { start } from 'repl';

@Component({
  selector: 'app-counter',
  inputs: ['counter', 'componentCounterValue'],
  template: `
  <button (click)="decrease()">-</button>
  {{counterValue}}
  <button (click)="increase()">+</button>
  `,
  outputs: ['counterChange'],
})
export class CounterComponent implements OnInit {
  counter: number;
  componentCounterValue: number;
  counterValue = 0;
  counterChange: EventEmitter<number>;

  decrease() {
    this.counterValue -= 1;
    this.counterChange.emit(this.counterValue)

  }
  increase() {
    this.counterValue += 1;
    this.counterChange.emit(this.counterValue)
  }
  ngOnInit() {
    this.counterValue = this.counter;
  }
  constructor() {
    this.counterChange = new EventEmitter();
  }

}
