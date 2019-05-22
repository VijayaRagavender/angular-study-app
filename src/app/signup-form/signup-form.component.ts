import { UserNameValidator } from './username.validator';
import { Component } from '@angular/core';
import { FormGroup, FormControl,  Validators } from '@angular/forms'; 

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    account : new FormGroup({
      username : new FormControl('', [
                 Validators.required,
                 Validators.minLength(3),
                 UserNameValidator.cannotContainSpace,
                 UserNameValidator.maxiumLength
                 ], UserNameValidator.shouldBeUnique),
      password : new FormControl('', Validators.required)
    })
   
  });

  login(){
    this.form.setErrors({
      invalidLogin : true
    });
  }
  get username(){
    return this.form.get('account.username'); /** Since username form control is inside account
                                                  form group, we need to specify the full path. */
  }

  get password() {
    return this.form.get('account.password');/** Since password form control is inside account
                                                  form group, we need to specify the full path. */
  }
  
  display(){
    console.log(this.form.get('username'));
  }
}
