import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  courseCategory = [
    {id : 1 , name : "Development"},
    {id : 2 , name : "Arts"},
    {id : 3 , name : "Languages"}
  ];

  submit(f)
  {
    console.log(f.value);
  }
  constructor() { }

  ngOnInit() {
  }

}
