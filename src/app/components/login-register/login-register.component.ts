import { Component } from '@angular/core';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent {

  register() {
    console.log("register");
  }

  signIn() {
    console.log("sign in");
  }
}
