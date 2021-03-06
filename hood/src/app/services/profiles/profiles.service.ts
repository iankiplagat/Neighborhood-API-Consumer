import { Profile } from './../../interfaces/profiles/profiles';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  url = 'https://hood-watch-api.herokuapp.com/api/profile/';
  // tslint:disable-next-line: variable-name
  update_url = 'https://hood-watch-api.herokuapp.com/api/update/profile/';
  constructor(private http: HttpClient) { }

  fetchProfileApi(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.url);

  }
  // tslint:disable-next-line: typedef
  update(id: any, profile: Profile) {
    return this.http.put(`${this.update_url}${id}/`, profile);
  }
}
