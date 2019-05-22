import { CoursesService } from './courses.service';
import { Injectable } from '@angular/core';

@Injectable()
export class EmailService {
 courses;
  constructor(service : CoursesService) {
    this.courses = service.getCourses();
   }

   display(){
     return this.courses;
   }

}


