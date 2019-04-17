import { Component, OnInit } from '@angular/core';
import { GetOnlineDataService } from '../service/get-online-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  template: '{{myData | json}}',
})
export class UserdetailsComponent implements OnInit {

  myData;
  constructor(private service: GetOnlineDataService, private route: ActivatedRoute) {
    route.params.subscribe(params => { this.myData = service.getCachedData().results[params['uuid']]; console.log(this.myData) });
  }

  ngOnInit() {
  }

}
