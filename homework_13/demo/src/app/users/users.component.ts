import { Component, OnInit } from '@angular/core';
import { GetOnlineDataService } from '../service/get-online-data.service';

@Component({
  selector: 'app-users',
  template: `
  <ul>
    <li *ngFor="let data of myData; let i = index">
     <a [routerLink]="[i]" >
      Name-- {{data.name.first | json}}
    </a>
    </li>
  </ul>`,
})
export class UsersComponent implements OnInit {
  myData;
  constructor(private service: GetOnlineDataService) {
    this.service.getOnlineData();
    setTimeout(() => {
      this.myData = this.service.getCachedData().results;
      console.log(this.myData);
    }, 0);

  }
  ngOnInit() {

  }

}
