import { Component, OnInit } from '@angular/core';
import { AshuService } from 'src/app/ashu.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addcake',
  templateUrl: './addcake.component.html',
  styleUrls: ['./addcake.component.css']
})
export class AddcakeComponent implements OnInit {

  message: string = "";
  isUploaded = false;

  constructor(private ashuService: AshuService, private router: Router, private toastr: ToastrService) { 
    if (!this.ashuService.isAdmin) {
      this.router.navigate(["notauthorised"]);
    }
  }

  ngOnInit(): void {
  }

  file:any = null;
  imageUrl: string = "";
  ingredientsString: string = "";
  cakeDetails: any = {
    name: "",
    price: null,
    description: "",
    ingredients:[],
    image: "",
    type: "",
    weight: null,
    eggless: false,
  };

  getFile(event: any) {
    console.log(event.target.files[0]);
    
    this.file = event.target.files[0];
  }


  upload() {
    let formData = new FormData();
    formData.append("file", this.file);
    this.ashuService.uploadImage(formData).subscribe({
      next: (response: any)=>{
        this.cakeDetails.image=response.imageUrl;
        this.isUploaded = true;
      },
      error: (error)=>{
        console.log("Error is ", error);
      }
    });
  }

  submit() {
    this.cakeDetails.ingredients = this.ingredientsString.split(",");

    this.ashuService.addNewCake(this.cakeDetails).subscribe({
      next: (response: any)=>{
        if(response.message === "Success") {
          this.toastr.success("Cake added.");
          this.router.navigate(["/"]);
        } else {
          this.message = response.errorMessage.message;
        }
      },
      error: (error)=>{
        console.log("Error is ", error);
      }
    });
  }

}
