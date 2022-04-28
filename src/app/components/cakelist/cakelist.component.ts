import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { AshuService } from './../../ashu.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-cakelist',
  templateUrl: './cakelist.component.html',
  styleUrls: ['./cakelist.component.css']
})
export class CakelistComponent implements OnInit {

  
  cakeDetails: any = [];

  
  constructor(private ashuService: AshuService, private http: HttpClient, private loader: NgxUiLoaderService) {
    
    this.loader.start();
    
    this.ashuService.getallCakes().subscribe({
      next: (response: any) => {
        this.cakeDetails = response.data;
        this.loader.stop();
      },
      error: (error: any) => {
        console.log(error);
        this.loader.stop();
      }
    });

  }

  sort(dir: string) {
    this.ashuService.sort(dir, this.cakeDetails);
  }

  ngOnInit(): void {
  }

}
