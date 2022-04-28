import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  addressDetails: {
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
  

  addAddressDetails(obj: {cakes: any, price: number, name: string, address: string, city: string, pincode: string, phone: string}) {
    this.addressDetails = obj;
  }

  constructor() { }
}
