import { PostsService } from './../../../services/posts/posts.service';
import { Posts } from './../../../interfaces/posts/posts';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Posts[] = [];
  constructor(private http: HttpClient, private postservice: PostsService) { }

  // tslint:disable-next-line: typedef
  findPosts() {
    this.postservice.fetchPostsApi().subscribe(
      (res) => {
        this.posts = res;

      }, error => {
        console.error(error);
      }
    );
  }

  ngOnInit(): void {
  }

}
