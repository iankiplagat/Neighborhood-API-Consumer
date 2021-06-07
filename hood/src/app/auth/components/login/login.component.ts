import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.model = {
      username: '',
      email: '',
      password: '',
    };
  }
  // tslint:disable-next-line: typedef
  login() {
    this.authService.login(this.model).subscribe(
      response => {
        console.log(response);
        alert(this.model.username + 'logged in successfully');
      },
      error => {
        console.log('error', error);
        alert('Username or password is incorrect');
      }
    ) ;
  }

}
