import { Business } from './../../interfaces/business/business';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  url = 'http://127.0.0.1:8000/api/business/';
  // tslint:disable-next-line: variable-name
  update_url = 'http://127.0.0.1:8000/api/update/business/';

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
