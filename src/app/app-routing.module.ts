import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { CakeDetailsComponent } from './components/cake-details/cake-details.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { AddcakeComponent } from './components/addcake/addcake.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AddressComponent } from './components/address/address.component';
import { PaymentComponent } from './components/payment/payment.component';
import { OrderplacedComponent } from './components/orderplaced/orderplaced.component';
import { MyordersComponent } from './components/myorders/myorders.component';
import { ValidateCredentialsComponent } from './components/validate-credentials/validate-credentials.component';
import { NotauthorisedComponent } from './components/notauthorised/notauthorised.component';
import { Error404Component } from './components/error404/error404.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "signup", component: SignupComponent},
  {path: "login", component: LoginComponent},
  {path: "search", component: SearchComponent},
  {path: "forgot", component: ForgotComponent},
  {path: "addcake", component: AddcakeComponent},
  {path: "cakedetails/:cakeid", component: CakeDetailsComponent},
  {path: "cart", component: CartComponent},
  {path: "checkout", component: CheckoutComponent, children: [
    {path: "address", component: AddressComponent},
    {path: "payment", component: PaymentComponent},
    {path: "", redirectTo: "address", pathMatch: "full"},
  ]},
  {path: "orderplaced", component: OrderplacedComponent},
  {path: "myorders", component: MyordersComponent},
  {path: "validate", component: ValidateCredentialsComponent},
  {path: "notauthorised", component: NotauthorisedComponent},
  {path: "**", component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
