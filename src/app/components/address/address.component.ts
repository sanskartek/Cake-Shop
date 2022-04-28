import { Component, OnInit } from '@angular/core';

import { OrderService } from 'src/app/order.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  orderDetails: {
    cakes: any,
    price: number,
    name: string,
    address: string,
    city: string,
    pincode: string,
    phone: string
  } = {
    cakes: [],
    price: 0,
    name: "",
    address: "",
    city: "",
    pincode: "",
    phone: ""
  }

  addAddress() {
    this.orderService.addAddressDetails(this.orderDetails);
    
    this.router.navigate(["checkout/payment"]);
  }

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
  }

}
