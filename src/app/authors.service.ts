import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {

  constructor() { }
  getAuthors(){
    return ["authors1","authors2","authors3"];
  }

}
