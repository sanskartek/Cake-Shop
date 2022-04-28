import { Component, OnInit } from '@angular/core';
import { AshuService } from 'src/app/ashu.service';

import { OrderService } from 'src/app/order.service';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  body: any = {};
  placingOrder: boolean = false;

  cartItems:Array<any> = [];

  cakeOrder: any ={
    cakes: {},
    price: 0,
    name: this.getAddressDetails().name,
    address: this.getAddressDetails().address,
    city: this.getAddressDetails().city,
    pincode: this.getAddressDetails().pincode,
    phone: this.getAddressDetails().phone,
    
  }

  constructor(private ashuService: AshuService, private orderService: OrderService, private router: Router, private ngxUiLoaderService: NgxUiLoaderService) {

    this.ngxUiLoaderService.start();
    this.ashuService.getCartItems(this.body).subscribe({
      next: (response: any)=>{
        this.cartItems = response.data;
        this.cakeOrder.cakes = this.cartItems;
        this.ngxUiLoaderService.stop();
      },
      error: (error: any)=>{
        console.log("cart item Error is ", error);
        
      }
    });

    
  }

  totalCost: number = 0;

  findTotalCost() {
    this.totalCost = 0;
    this.cartItems.forEach(element => {
      
      this.totalCost += (element.price*element.quantity);
    });
  }

  getAddressDetails(): {cakes: any, price: number, name: string, address: string, city: string, pincode: string, phone: string} {
    return this.orderService.addressDetails;
  }

  
  
  placeOrder() {
    this.ashuService.placeOrder(this.cakeOrder).subscribe({
      next: (response)=>{
        this.placingOrder = true;
        this.router.navigate(["orderplaced"]);
      },
      error: (error)=>{
        console.log(error);
      }
    });
  }

  ngDoCheck() {
    this.findTotalCost();
    this.cakeOrder.price = this.totalCost;
  }

  ngOnInit(): void {
  }

}
