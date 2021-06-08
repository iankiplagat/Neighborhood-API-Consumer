import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Neighborhood } from './../../interfaces/neighborhood/neighborhood';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NeighborhoodService {
  [x: string]: any;

  url = 'https://hood-watch-api.herokuapp.com/api/hood/';
  // tslint:disable-next-line: variable-name
  update_url = 'https://hood-watch-api.herokuapp.com/api/update/hood/';

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
  update(id: any, neighborhood: Neighborhood): Observable<any>  {
    return this.http.put(`${this.update_url}${id}/`, neighborhood);
  }

}
