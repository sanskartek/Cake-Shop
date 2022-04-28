import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { CakelistComponent } from './components/cakelist/cakelist.component';
import { HomeComponent } from './components/home/home.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxStarRatingModule } from 'ngx-star-rating';


import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { AddcakeComponent } from './components/addcake/addcake.component';
import { CakeDetailsComponent } from './components/cake-details/cake-details.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AddressComponent } from './components/address/address.component';
import { PaymentComponent } from './components/payment/payment.component';
import { OrderplacedComponent } from './components/orderplaced/orderplaced.component';
import { MyordersComponent } from './components/myorders/myorders.component';
import { ValidateCredentialsComponent } from './components/validate-credentials/validate-credentials.component';
import { Error404Component } from './components/error404/error404.component';
import { NotauthorisedComponent } from './components/notauthorised/notauthorised.component';
import { SearchCardComponent } from './components/search-card/search-card.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    CardComponent,
    SignupComponent,
    FooterComponent,
    CakelistComponent,
    HomeComponent,
    LoginComponent,
    SearchComponent,
    ForgotComponent,
    AddcakeComponent,
    CakeDetailsComponent,
    CartComponent,
    CheckoutComponent,
    AddressComponent,
    PaymentComponent,
    OrderplacedComponent,
    MyordersComponent,
    ValidateCredentialsComponent,
    Error404Component,
    NotauthorisedComponent,
    SearchCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxUiLoaderModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgxStarRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
