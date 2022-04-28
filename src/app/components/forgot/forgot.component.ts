import { Component, OnInit } from '@angular/core';
import { AshuService } from 'src/app/ashu.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  email: string = "";
  submitting: boolean = false;
  message: string = "";

  constructor(private ashuService: AshuService, private router: Router, private toastr: ToastrService) {
    if (this.ashuService.isLoggedIn) {
      this.router.navigate(["home"]);
    }
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitting = true;
    this.ashuService.recoverPassword({"email": this.email}).subscribe({
      next: (response: any)=>{
        if (!response.errorMessage) {
          this.router.navigate(["login"]);
          this.toastr.success(response.message);
        } else {
          this.message = response.errorMessage;
          this.submitting = false;
        }
      },
      error: (error)=>{
        console.log("Error is ", error);
        this.submitting = false;
      }
    });
  }

}
