import { Posts } from './../../interfaces/posts/posts';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url = 'http://127.0.0.1:8000/api/post/';
  constructor(private http: HttpClient) {

   }
  fetchPostsApi(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.url);

  }
  // tslint:disable-next-line: typedef
  create(posts: any) {
    return this.http.post(this.url, posts);
  }
}
