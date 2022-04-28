import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeStamp } from 'console';
import { AshuService } from './../../ashu.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userDetails: { email: string, password: string } = {
    email: "",
    password: ""
  }

  isLoggingIn: boolean = false;
  message: any = "";

  login() {
    // this.ashuService.numberOfCartItems = 0;
    this.isLoggingIn = true;
    this.ashuService.login(this.userDetails).subscribe({
      next: (response: any) => {
        console.log(`user's name is ${response.name} and email is ${response.email}`);
        if (response.token) {
          localStorage["token"] = response.token;
          localStorage["email"] = response.email;
          this.ashuService.isLoggedIn = true;
          if (this.ashuService.adminEmails.includes(response.email)) {
            this.ashuService.isAdmin = true;
          }
          this.router.navigate([""]);

        } else {
          this.message = response.message;
          this.isLoggingIn = false;
        }
      },
      error: (error: any) => {
        console.log(`${error}`);
        this.message = error.message;
        this.isLoggingIn = false;
      }
    });
    
  }

  constructor(private ashuService: AshuService, private router: Router) { 
    if (this.ashuService.isLoggedIn) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit(): void {
  }

}
