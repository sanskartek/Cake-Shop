import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AshuService } from 'src/app/ashu.service';

@Component({
  selector: 'app-validate-credentials',
  templateUrl: './validate-credentials.component.html',
  styleUrls: ['./validate-credentials.component.css']
})
export class ValidateCredentialsComponent implements OnInit {

  constructor(private router: Router, private ashuService: AshuService) { 
    if (!this.ashuService.isLoggedIn) {
      this.router.navigate(["login"]);
    }
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(["login"]);
    }, 5000);
  }

}
