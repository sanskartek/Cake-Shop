import { Component, OnInit } from '@angular/core';
import { AshuService } from 'src/app/ashu.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {

  cakeOrders: any = [];

  constructor(private ashuService: AshuService, private ngxUiLoaderService: NgxUiLoaderService, private router: Router) {

    if (!this.ashuService.isLoggedIn) {
      this.router.navigate(["login"]);
    }

    this.ngxUiLoaderService.start();
    this.ashuService.previousOrders({}).subscribe({
      next:(response)=>{
        this.cakeOrders = response;
        this.ngxUiLoaderService.stop();
      },
      error:(error)=> {
        console.log("Error is ", error);
        this.ngxUiLoaderService.stop();
      }
    });
  }

  ngOnInit(): void {
  }

}
