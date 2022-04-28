import { Component } from '@angular/core';
import { AshuService } from 'src/app/ashu.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tekangularapp';

  constructor(private ashuService: AshuService) {
    if (localStorage["token"]) {
      this.ashuService.isLoggedIn = true;
    }
    if (this.ashuService.adminEmails.includes(localStorage["email"])) {
      this.ashuService.isAdmin = true;
    }
  }
}
