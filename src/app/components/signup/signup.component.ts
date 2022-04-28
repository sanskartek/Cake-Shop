import { Component, OnInit } from '@angular/core';
import { AshuService } from './../../ashu.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: any;
  message: string = "";
  isSubmitting: boolean = false;

  logInfo() {

    this.message = "";
    this.isSubmitting = true;
    if (this.signupForm.valid) {
      this.ashuService.register({
        name: this.signupForm.get("nameFormControl").value,
        email: this.signupForm.get("emailFormControl").value,
        password: this.signupForm.get("passwordFormControl").value
      }).subscribe({
        next: (response: any) => {
          console.log("response from signup api", response);
          this.isSubmitting = false;
          this.router.navigate(["validate"]);
        }, 
        error: (error: any) => {
          console.log("Error: ", error);
          this.message = error.message;
          this.isSubmitting = false;
        }
      });

    } else {
      if (!this.signupForm.get("nameFormControl").value) {
        this.message += "No name. ";
        
      }
      if (this.signupForm.get("nameFormControl").value.length > 16) {
        this.message += "Name should be shorter than 16 characters long. ";
      }
      if (this.signupForm.get("nameFormControl").value.length < 4) {
        this.message += "Name should be at least 4 characters long. ";
      }
      if (!this.signupForm.get("emailFormControl").value) {
        this.message += "No email. ";
      }
      if (this.signupForm.get("emailFormControl").value.email) {
        this.message += "Enter valid email. ";
      }
      if (!this.signupForm.get("passwordFormControl").value) {
        this.message += "No password. ";
      }
      if (this.signupForm.get("passwordFormControl").value.length < 8) {
        this.message += "Password should be at least 8 charaters long. ";
      }
      this.isSubmitting = false;
    }
  }


  constructor(private ashuService: AshuService, private formBuilder: FormBuilder, private router: Router) {
    this.signupForm = this.formBuilder.group({
      nameFormControl: ["", [Validators.required, Validators.maxLength(16), Validators.minLength(4)]],
      emailFormControl: ["", [Validators.required, Validators.email]],
      passwordFormControl: ["", [Validators.required, Validators.minLength(8)]],
    })
    
    if (this.ashuService.isLoggedIn) {
      this.router.navigate(["home"]);
    }
  }

  ngOnInit(): void {
  }

}
