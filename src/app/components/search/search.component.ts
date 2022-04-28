import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AshuService } from 'src/app/ashu.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  cakeList = [];

  constructor(private route: ActivatedRoute, private ashuService: AshuService, private loader: NgxUiLoaderService) { 
    
    this.route.queryParams.subscribe((query: any)=>{
      this.loader.start();
      const searchText = query["q"];

      this.ashuService.searchCakes(searchText).subscribe({
        next: (response: any)=>{
          this.cakeList = response.data;
          this.loader.stop();
        },
        error: (error: any)=>{
          console.log("Error is", error);
          this.loader.stop
        }
      });
    })

  }

  ngOnInit(): void {
  }

}
