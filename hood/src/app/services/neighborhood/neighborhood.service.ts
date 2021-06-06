import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Neighborhood } from './../../interfaces/neighborhood/neighborhood';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NeighborhoodService {

  url = 'http://127.0.0.1:8000/api/hood/';

  constructor(private http: HttpClient) {

   }
   fetchNeighborhoodApi(): Observable<Neighborhood[]>{
     return this.http.get<Neighborhood[]>(this.url);

   }
   // tslint:disable-next-line: typedef
   create(neighborhood: any) {
    return this.http.post(this.url, neighborhood);
  }

}
