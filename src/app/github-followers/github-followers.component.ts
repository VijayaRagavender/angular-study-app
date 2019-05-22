import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { GitHubServices } from './../services/gitHub.services';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/Observable/combineLatest';
import 'rxjs/add/Operator/map';
import 'rxjs/add/Operator/switchMap';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  myFollowers : any[];
  http : Http;
  constructor(
    private route : ActivatedRoute,
    private service : GitHubServices) { }

  ngOnInit() {
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .switchMap(combineMap => {
      let id = combineMap[0].get('id');
      let page = combineMap[1].get('page');
      console.log('id',id);
      console.log('page', page);

      /* The above parameters shall be passed to a service for interacting with backend.
         Since we don't have that service now, we aren't using this value above.
         Therefore moving the below code with the combine latest value.
      */ 
      return this.service.getAll()
    }).subscribe(myFollowers =>{
      this.myFollowers = myFollowers;
      console.log("myFollowers",this.myFollowers);
    })
    
   
  }

}
