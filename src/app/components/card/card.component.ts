import { Component, Input, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { AshuService } from 'src/app/ashu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  isAddingToCart = false;

  @Input() cakeData: any = {};

  constructor(private toastr: ToastrService, private ashuService: AshuService, private router: Router) {}

  addToCart():void {
    if (this.ashuService.isLoggedIn) {
      this.isAddingToCart = true;
      this.ashuService.addToCart(
        {
          cakeid: this.cakeData.cakeid,
          name: this.cakeData.name,
          price: this.cakeData.price,
          image: this.cakeData.image,
          weight: 0
        }
      ).subscribe({
        next:(response)=>{
          console.log("Response is ", response);
          this.toastr.success('Added to Cart!');
          this.ashuService.numberOfCartItems++;
          this.isAddingToCart = false;
        },
        error:(error)=>{
          console.log("Error is ", error);
          
        }
      }); 
      

    } else {
      this.router.navigate(["login"]);
    }
  }


  ngOnInit(): void {}

}
