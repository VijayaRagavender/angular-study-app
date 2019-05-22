import { ChangePasswordValidator } from './change-password-validator';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent  {

  // form = new FormGroup({
  //   oldPassword : new FormControl('',Validators.required,ChangePasswordValidator.checkOldPassword),
  //   newPassword : new FormControl('',Validators.required),
  //   confirmPassword : new FormControl('',Validators.required)
  // })
  form;
  constructor(fb : FormBuilder){
    this.form = fb.group({
      oldPassword : ['',Validators.required,ChangePasswordValidator.checkOldPassword],
      newPassword : ['',Validators.required],
      confirmPassword : ['',Validators.required]
    },{
      validator : ChangePasswordValidator.validatePasswords

    });
  }

  
  

   get oldPassword(){
      return this.form.get('oldPassword');
      
    }

    get newPassword(){
      return this.form.get('newPassword');
      
    }

    get confirmPassword(){
      return this.form.get('confirmPassword');
      
    }
 

}
