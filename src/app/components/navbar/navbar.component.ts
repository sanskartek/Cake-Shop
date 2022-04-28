import { Component, OnChanges, OnInit } from '@angular/core';
import { AshuService } from './../../ashu.service';
import { Router } from '@angular/router';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges{

  faSearch = faSearch;
  faShoppingCart = faShoppingCart;

  get numberOfCartItems() {
    return this.ashuService.numberOfCartItems;
  }

  constructor(private ashuService: AshuService, private router: Router) {
    
  }
  
  projectTitle: string = "Sanskar's Cake Shop";

  searchText: string = "";

  search() {
    this.router.navigate(["search"], { queryParams: { q: this.searchText } });
  }

  get isLoggedIn(): boolean {
    return this.ashuService.isLoggedIn;
  }
  
  get isAdmin(): boolean {
    return this.ashuService.isAdmin;
  }


  logout() {
    this.ashuService.logout();
    
  }

  ngOnInit(): void {
    if (this.ashuService.isLoggedIn) {
      this.ashuService.getCartItems({}).subscribe({
        next: (response: any)=> {
          for(let i=0; i < response.data.length; i++) {
            this.ashuService.numberOfCartItems += response.data[i].quantity;
          }
        },
        error: (error)=> {
          console.log("Error is", error);
        }
      });
    }
  }

  ngOnChanges() {
   
  }

}
