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

  // tslint:disable-next-line: typedef
  onSubmit(posts: any) {
    this.postservice.create(posts).subscribe((result) => {
      console.warn('result', result);
    });
    console.warn(posts);
  }
  // tslint:disable-next-line: typedef
  // updatePosts(id: any, posts: Posts) {
  //   this.postservice.update(id, posts).subscribe((result) => {
  //     console.warn('result', result);
  //   });
  //   console.warn(id);
  // }
  ngOnInit(): void {
  }

}
