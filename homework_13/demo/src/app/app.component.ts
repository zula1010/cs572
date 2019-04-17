import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <a [routerLink]="['users']">Users</a>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'demo';
}
