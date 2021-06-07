import { AuthService } from './../../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  model: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.model = {
      username: '',
      email: '',
      password: '',
      password2: '',
    };
  }
  // tslint:disable-next-line: typedef
  register() {
    this.authService.register(this.model).subscribe(
      (response) => {
        alert('User' + this.model.username + 'has been created');
      },
      (error) => console.log('error', error)
    );
  }
}
