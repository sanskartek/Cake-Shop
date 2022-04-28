import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AshuService } from 'src/app/ashu.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-cake-details',
  templateUrl: './cake-details.component.html',
  styleUrls: ['./cake-details.component.css']
})
export class CakeDetailsComponent implements OnInit {


  cakeID: string = "";
  cakeDetails = {
    cakeid: "",
    createdat: "",
    description: "",
    eggless: false,
    flavour: "",
    image: "",
    ingredients: [],
    likes: 10,
    name: "",
    owner: {
      email: '',
      name: ''
    },
    price: 0,
    ratings: 0,
    reviews: 0,
    type: "",
    weight: 0,
    __v: 0,
    _id: "",
  };
  isAddingToCart: boolean = false;
  form: FormGroup;

  constructor(private loader: NgxUiLoaderService,private route: ActivatedRoute, private ashuService: AshuService, private toastr: ToastrService, private router: Router, private formBuilder: FormBuilder) {
    this.cakeID = this.route.snapshot.params["cakeid"];

    this.loader.start();
    this.ashuService.getCakeDetails(this.cakeID).subscribe({
      next: (response: any)=> {
        this.cakeDetails = response.data;
        this.loader.stop();
      },
      error: (error: any)=> {
        console.log("Error is ", error);
        this.loader.stop();
      }
    });

    this.form = this.formBuilder.group({
      rating: [this.cakeDetails, Validators.required]
    });
   
  }

  addToCart():void {
    if (this.ashuService.isLoggedIn) {

      this.isAddingToCart = true;

      this.ashuService.addToCart(
        {
          cakeid: this.cakeDetails.cakeid,
          name: this.cakeDetails.name,
          price: this.cakeDetails.price,
          image: this.cakeDetails.image,
          weight: this.cakeDetails.weight
        }
      ).subscribe({
        next:(response)=>{
          console.log("Response is ", response);
          this.toastr.success('Added to Cart!');
          this.router.navigate(["cart"]);
        },
        error:(error)=>{
          console.log("Error is ", error);
        }
      }); 

      

    } else {
      this.router.navigate(["login"]);
    }
  }

  ngOnInit(): void {
  }

}
