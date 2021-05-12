import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { __assign } from 'tslib';
import { signup } from './model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  signup: signup;
  signups: signup[];
  status = true;

  constructor() {
    this.signup = new signup();
    this.signups = [];


  }

  ngOnInit(): void {
  }


  Signup(form: NgForm) {
    if (this.status) {
      this.signups.push(__assign({}, this.signup));
      alert("registered successfully" + JSON.stringify(this.signups.values));

      form.resetForm();

    } else {
      for (let i = 0; i < this.signups.length; i++) {
        if (this.signups[i].firstname = this.signup.firstname) {
          this.signups[i].firstname = this.signup.firstname;
          this.signups[i].lastname = this.signup.lastname;
          this.signups[i].email = this.signup.email;
          this.signups[i].password = this.signup.password;
          this.signups[i].confirmpassword = this.signup.confirmpassword;
          this.status = true;
          alert("added");
          form.resetForm();
          this.signup = new signup();
        }

      }

    }
  }
}
