import { EmailService } from './email.service';
import { CoursesService } from './courses.service';
import {Component} from '@angular/core';

@Component({
    selector :'courses',
    template :`
            <h2>{{ title }}<h2>
            <ul>
                 <li *ngFor = "let course of courses">
                      {{course}}
                 </li>
            </ul>
            <img [src] = "imageUrl"\>
            <table>
                <tr>
                    <td [attr.colspan] = "colspan"></td>
                </tr>
            </table>
            <div (click)="onDivClicked1()">
            <div (click)="onDivClicked()">
            <button (click)="btnClick()"></button>
            <button class="btn btn-primary" [class.active]="isActive" 
            [style.background]="isActive ? 'blue' : 'white'" (click)="onSave($event)">
            Save</button>
            <input [(ngModel)] ="email" (keyup.enter) ="onKeyUp()"/>
            </div>
            </div>
             `
})
export class CoursesComponent {
  title = "List of Courses - interpolation";
  imageUrl = "http://www.cartoonson.com/_resources/Cartoons/show/12/image/555x418/Tom-and-Jerry-classic.jpg";
  courses ;
  colspan = 2;
  isActive = true;
  email = "vijayaR@test.com"
  onKeyUp(){
      console.log(this.email);
  }

  onDivClicked1(){
      console.log('Div Button1 was clicked'); 
  }
  btnClick(){
      console.log('Button1 was clicked'); 
  }
  onDivClicked(){
      console.log('Div Button was clicked'); 
  }
  onSave($event){
      $event.stopPropagation();
      console.log('Button was clicked',$event);
  }

  constructor(service : EmailService){
     this.courses = service.display();
  }
    display(){
        return this.courses;
    }
}

//let course = new CoursesComponent(new CoursesService);
//console.log(course.display());
