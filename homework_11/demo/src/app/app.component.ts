import { Component, ViewChild } from '@angular/core';
import { listenerCount } from 'cluster';
import { CounterComponent } from './counter.component';

@Component({
  selector: 'app-root',
  template: `<app-counter [counter] = counter [componentCounterValue]=componentCounterValue (counterChange) = counterChange($event)> </app-counter> <br/>
  Component counter value = {{componentCounterValue}}
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number = 3333;
  componentCounterValue: number = 0;
  counterChange(e) {
    this.counter = e;
    this.componentCounterValue = e;
    // this.componentCounterValue = e;
    console.log("from Parent" + e);
  }

}
// [counter] = counter (counterChange) = makeChange($event) [componentCounterValue] = componentCounterValue