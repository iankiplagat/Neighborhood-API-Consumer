import { Business } from './../../interfaces/business/business';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  url = 'https://hood-watch-api.herokuapp.com/api/business/';
  // tslint:disable-next-line: variable-name
  update_url = 'https://hood-watch-api.herokuapp.com/api/update/business/';

  constructor(private http: HttpClient) { }

  fetchBusiness(): Observable<Business[]>{
    return this.http.get<Business[]>(this.url);
  }
  // tslint:disable-next-line: typedef
  create(business: any) {
    return this.http.post(this.url, business);
  }
  // tslint:disable-next-line: typedef
  update(id: any, business: Business) {
    return this.http.put(`${this.update_url}${id}/`, business);
  }
}
