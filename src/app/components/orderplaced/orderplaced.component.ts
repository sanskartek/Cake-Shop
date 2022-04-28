import { Component, OnInit } from '@angular/core';
import { AshuService } from 'src/app/ashu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderplaced',
  templateUrl: './orderplaced.component.html',
  styleUrls: ['./orderplaced.component.css']
})
export class OrderplacedComponent implements OnInit {

  constructor(private ashuService: AshuService, private router: Router) { 
    if (!this.ashuService.isLoggedIn) {
      this.router.navigate(["login"]);
    }
  }

  ngOnInit(): void {
  }

}
