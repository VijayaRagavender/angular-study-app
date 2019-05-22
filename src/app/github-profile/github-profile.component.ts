import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";


@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route : ActivatedRoute,
  private routeService : Router) 
  { 

  }

  ngOnInit() {
    console.log('git hub profile component');
    //this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe(params => {
      let id = +params.get('id'); // + is used to convert a string to number.
     console.log(id);
     
    });
  }

  submit() {
    this.routeService.navigate(['/followers'] , {
      queryParams : {
        page : 1,
        order : 'newest'
      }
    })
  }

}
