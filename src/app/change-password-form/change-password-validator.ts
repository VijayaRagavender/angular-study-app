import { ValidationErrors } from '@angular/forms/forms';
import { AbstractControl } from '@angular/forms/src/forms';

export class ChangePasswordValidator {

   static checkOldPassword ( control : AbstractControl) : Promise<ValidationErrors|null>{
       return new Promise((resolve,reject) => {
           setTimeout(() => {
                if(control.value != 'vijay'){
                    return resolve({checkOldPassword : true});
                }
                else {
                    return resolve(null);
                }
           },2000)
       })
   }

   static validatePasswords(control : AbstractControl){
       console.log('form object', control)
       let newPassword = control.get('newPassword');
       let confirmPassword = control.get('confirmPassword');
       console.log('confirmpassword',confirmPassword)
       if(newPassword.value !== confirmPassword.value){
        return { validatePasswords : true}
       }
        return null;
   }
}