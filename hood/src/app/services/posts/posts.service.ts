import { Posts } from './../../interfaces/posts/posts';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url = 'https://hood-watch-api.herokuapp.com/api/post/';
  // tslint:disable-next-line: variable-name
  update_url = 'https://hood-watch-api.herokuapp.com/api/update/post/';

  constructor(private http: HttpClient) {

   }
  fetchPostsApi(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.url);

  }
  // tslint:disable-next-line: typedef
  create(posts: any) {
    return this.http.post(this.url, posts);
  }
  // tslint:disable-next-line: typedef
  update(id: any, posts: Posts) {
    return this.http.put(`${this.update_url}${id}/`, posts);
  }
}
