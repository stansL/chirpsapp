import {Component, OnInit} from '@angular/core';
import {User} from "../user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error_message = '';
  // @ts-ignore
  user: User = {
    email: '',
    password: ''
  };


  constructor() {
  }

  ngOnInit() {
  }

  login() {
    this.error_message = `Login request for ${this.user.name}`;
  }
}
