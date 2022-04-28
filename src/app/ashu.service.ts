import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AshuService {
  
  constructor(private http: HttpClient, private router: Router) { }
  
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  numberOfCartItems: number = 0;
  url = "https://apifromashu.herokuapp.com/api/";
  adminEmails = ["shikharsanskar@gmail.com"];


  sort(dir: string, data: any) {
    data.sort(function (obj1: any, obj2: any): any {
      return dir === "asc" ? obj1.price - obj2.price : obj2.price - obj1.price;
    })
  }

  register(body: any) {
    return this.http.post(this.url+"register", body);
  }

  getallCakes(): any {
    return this.http.get(this.url+"allcakes");
  }

  searchCakes(searchText: string): any {
    return this.http.get(this.url+"searchcakes?q="+searchText);
  }

  getCakeDetails(id: string): any {
    return this.http.get(this.url+"cake/" + id);
  }

  login(body: any) {
    return this.http.post(this.url+"login", body);
  }

  recoverPassword(body: any) {
    return this.http.post(this.url+"recoverpassword", body);
  }

  addToCart(cake: {cakeid: string, name: string, price: number, image: string, weight: number}) {
    let myheaders = new HttpHeaders();
    myheaders = myheaders.append("authtoken", localStorage["token"]);
    
    const options = {
      headers: myheaders
    };
    return this.http.post(this.url+"addcaketocart", cake, options);
  }

  getCartItems(body: any) {
    let myheaders = new HttpHeaders;
    myheaders = myheaders.append("authtoken", localStorage["token"]);
    const options = {
      headers: myheaders
    };

    return this.http.post(this.url+"cakecart", body, options);
  }

  placeOrder(order: any) {
    let myheaders = new HttpHeaders;
    myheaders = myheaders.append("authtoken", localStorage["token"]);
    const options = {
      headers: myheaders
    };
    return this.http.post(this.url+"addcakeorder", order, options);
  }

  removeCakeFromCart(cakeId: any) {
    let myheaders = new HttpHeaders;
    myheaders = myheaders.append("authtoken", localStorage["token"]);
    const options = {
      headers: myheaders
    };
    return this.http.post(this.url+"removecakefromcart", cakeId, options);
  }

  removeOneCakeFromCart(cakeId: any) {
    let myheaders = new HttpHeaders;
    myheaders = myheaders.append("authtoken", localStorage["token"]);
    const options = {
      headers: myheaders
    };
    return this.http.post(this.url+"removeonecakefromcart", cakeId, options);
  }

  previousOrders(body: any) {
    let myheaders = new HttpHeaders;
    myheaders = myheaders.append("authtoken", localStorage["token"]);
    const options = {
      headers: myheaders
    };
    return this.http.post(this.url+"cakeorders", body, options);
  }

  uploadImage(image: any) {
    let myheaders = new HttpHeaders;
    myheaders = myheaders.append("authtoken", localStorage["token"]);
    const options = {
      headers: myheaders
    };
    return this.http.post(this.url+"upload", image, options);
  }

  addNewCake(body: any) {
    let myheaders = new HttpHeaders;
    myheaders = myheaders.append("authtoken", localStorage["token"]);
    const options = {
      headers: myheaders
    };
    return this.http.post(this.url+"addcake", body, options);
  }

  logout() {
    
    localStorage.clear();

    this.isLoggedIn = false;
    this.isAdmin = false;
    
    this.router.navigate([""]);
    
  }
}
