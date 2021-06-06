import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Neighborhood } from './../../interfaces/neighborhood/neighborhood';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NeighborhoodService {

  url = 'http://127.0.0.1:8000/api/hood/';
  // tslint:disable-next-line: variable-name
  update_url = 'http://127.0.0.1:8000/api/update/hood/';

  constructor(private http: HttpClient) {

   }
   fetchNeighborhoodApi(): Observable<Neighborhood[]>{
     return this.http.get<Neighborhood[]>(this.url);

   }
   // tslint:disable-next-line: typedef
   create(neighborhood: any) {
    return this.http.post(this.url, neighborhood);
  }
  // tslint:disable-next-line: typedef
  update(id: any, neighborhood: Neighborhood) {
    return this.http.put(`${this.update_url}${id}/`, neighborhood);
  }

}
