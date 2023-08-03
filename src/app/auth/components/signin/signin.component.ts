import { Component } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  user: User = {
    email: "",
    username: "",
    firstName: "",
    lastName: "",
  }

  signIn(){}

}
