import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetOnlineDataService {
  constructor(private http: HttpClient) { }
  getOnlineData() {
    this.http.get('https://randomuser.me/api/?results=10').subscribe(data => { localStorage.setItem('data', JSON.stringify(data)) });
  }
  getCachedData() {
    return JSON.parse(localStorage.getItem('data'));
  }

}
