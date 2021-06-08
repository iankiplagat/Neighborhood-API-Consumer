import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = 'https://hood-watch-api.herokuapp.com/';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  login(model: any): Observable<any>{
    return this.http.post(this.authUrl + `authlogin/`, model);
  }
  register(model: any): Observable<any>{
    return this.http.post(this.authUrl + `register/`, model);
  }
}
