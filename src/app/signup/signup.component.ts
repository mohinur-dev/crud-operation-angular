import { Component } from '@angular/core';
import { Userup } from '../userup';
import { Router } from '@angular/router';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userup: Userup = new Userup();

  constructor(private router: Router, private signup: SignupService) {

  }

  userSignUp() {
    this.userup = new Userup(this.userup.id, this.userup.name, this.userup.email, this.userup.gender, this.userup.dob, this.userup.username, this.userup.password);
    this.signup.userSignUp(this.userup).subscribe(data => {
      console.log("success", data),
        this.router.navigate(['signin'])
    });
  }

  signInPage() {
    this.router.navigate(["signin"]);
  }

}
