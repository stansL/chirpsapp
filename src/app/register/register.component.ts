import {Component, OnInit} from '@angular/core';
import {User} from "../user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  error_message = '';
  // @ts-ignore
  user: User = {
    name: '',
    email: '',
    password: '',
    password2: ''
  };

  constructor() {
  }

  ngOnInit() {
  }

  register() {
    console.log(this.user);
    if (!this.user.name) {
      this.error_message = `Name is mandatory for registration!`;
    }
    if (!this.user.email) {
      this.error_message = `Email is mandatory for registration!`;
    }
    if (this.user.password !== this.user.password2) {
      this.error_message = `Password and confirmation must be similar!`;
    }
    if(!this.error_message){
    //  Safe to make the registration request to the server, probably re-route to the login/chirps page

    }
  }
}
