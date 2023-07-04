import { Component } from '@angular/core';
import { Userin } from '../userin';
import { Router } from '@angular/router';
import { SigninService } from '../signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  signin: Userin = new Userin();

  constructor(private router: Router, private signinService: SigninService) {

  }

  signUpPage() {
    this.router.navigate(["signup"])
  }
  userSignIn() {
    let user: Userin = new Userin(this.signin.username, this.signin.password)
    this.signinService.signinUser(user).subscribe(response => {
      console.log(response);
      if (response != null) {
        this.router.navigate(['home']);
      } else {
        alert("username and password does not match!");
      }
    })
  }
}
