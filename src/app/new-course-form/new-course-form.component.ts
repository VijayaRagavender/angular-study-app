import { FormGroup, FormArray, FormControl, FormBuilder, Validator, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {

  form = new FormGroup({
    name : new FormControl('', Validators.required),
    contact : new FormGroup({
      email : new FormControl(),
      phone : new FormControl()
    }),
    topics : new FormArray([])
  });

  constructor(fb: FormBuilder) {
    this. form = fb.group({
      name : ['', Validators.required],
      contact : fb.group({
        email :[],
        phone : []
      }),
      topics : fb.array([])
    });
  }

  addTopics(topic : HTMLInputElement){
    console.log('input element',topic);
   this.topics.push(new FormControl(topic.value));
   topic.value = '';
    
  }
  
  removeTopics(topic : FormControl){
    console.log('inside the removeTopics');
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }

}
