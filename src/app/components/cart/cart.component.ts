import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AshuService } from 'src/app/ashu.service';
import { faTrash, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  body: any = {};
  faTrash = faTrash;
  faPlus = faPlus;
  faMinus = faMinus;

  cartItems:Array<any> = [];

  constructor(private ashuService: AshuService, private ngxUiLoaderService: NgxUiLoaderService, private router: Router) {
    if (!this.ashuService.isLoggedIn) {
      this.router.navigate(["login"]);
    }
  }

  totalCost: number = 0;

  findTotalCost() {
    this.totalCost = 0;
    this.cartItems.forEach(element => {
      
      this.totalCost += (element.price*element.quantity);
    });
  }

  onDelete(id: number) {
    this.ashuService.removeCakeFromCart({"cakeid": id}).subscribe({
      next: (response)=> {
        console.log("Response is ", response);
        let quantity  = 0;
        this.cartItems.forEach(element => {
          if (element.cakeid === id) {
            quantity = element.quantity;
          }
        });
        this.ashuService.numberOfCartItems -= quantity;
        this.ngOnInit();
      },
      error: (error)=> {
        console.log("Error is ", error);
        
      }
    });
    
  }

  
  onPlus(item: any) {
    this.ashuService.addToCart(item).subscribe({
      next:(response)=>{
        console.log("Response is ", response);
        this.ashuService.numberOfCartItems++;
        this.ngOnInit();
      },
      error:(error)=>{
        console.log("Error is ", error);
        
      }
    });
  }


  onMinus(id: number) {
    this.ashuService.removeOneCakeFromCart({"cakeid": id}).subscribe({
      next: (response)=> {
        console.log("Response is ", response);
        this.ashuService.numberOfCartItems--;
        this.ngOnInit();
      },
      error: (error)=> {
        console.log("Error is ", error);
        
      }
    });
  }

  ngDoCheck() {
    this.findTotalCost();
  }

  ngOnInit(): void {
    this.ngxUiLoaderService.start();
    this.ashuService.getCartItems(this.body).subscribe({
      next: (response: any)=>{
        this.cartItems = response.data;
        console.log(this.cartItems);
        
        this.ngxUiLoaderService.stop();
      },
      error: (error)=>{
        console.log("cart item Error is ", error);
        this.ngxUiLoaderService.stop();
      }
    });
  }

}
