import { Http } from '@angular/http';
import { Injectable, ErrorHandler } from '@angular/core';
import {AppError} from '@angular/common/app-error';
import {NotFoundError} from '@angular/common/not-found-error';
import {BadInputError} from '@angular/common/bad-input-error';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/Operator/catch';
import 'rxjs/add/Operator/map';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/Operator/toPromise';

@Injectable()
export class DataService {


  constructor(private url : string, private http : Http) { 

  }
   
  getAll() {
   return  this.http.get(this.url)
    .map(response => response.json())
    .catch(this.handleError);
  }

  create(resource : object){
    //return  Observable.throw(new AppError());
   return this.http.post(this.url,resource).map(response => response.json()).catch(this.handleError);
  }

  update(resource : any){
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({title : 'vijay' }))
    .map(response => response.json())
    .catch(this.handleError);
  }

  delete(id){
    //  return Observable.throw(new AppError());
     return this.http.delete(this.url + '/' + id)
     .map(response => response.json())
     //.toPromise()
     .catch(this.handleError);
  }

  private handleError(error : Response){
    if(error.status === 400)
          return  Observable.throw(new BadInputError(error));
    if(error.status === 404)
          return Observable.throw(new NotFoundError());
    else
       return Observable.throw(new AppError(error));
  }

}
