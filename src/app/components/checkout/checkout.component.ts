import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AshuService } from 'src/app/ashu.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private router: Router, private ashuService: AshuService) { 
    if (!this.ashuService.isLoggedIn) {
      this.router.navigate(["login"]);
    }
  }

  ngOnInit(): void {
  }

}
