
import { AbstractControl } from "@angular/forms/src/forms";
import { ValidationErrors } from "@angular/forms/forms";

export class UserNameValidator {
   static cannotContainSpace (control : AbstractControl) : ValidationErrors {
        if((control.value as string).indexOf(' ') >=0)
            {
                return {cannotContainSpace : true}
            }
            return null;
    }

    static maxiumLength (control : AbstractControl) : ValidationErrors {
        if((control.value as string).length >5){
            return {maxiumLength : {
                requiredLength : 5,
                actualLength : (control.value as string).length
            }}
        }
         return null;
    }

    static shouldBeUnique(control : AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
             setTimeout(() => {
                if(control.value === 'vijay'){
                     resolve({shouldBeUnique : true}) ;
                }
                else {
                  resolve(null);
                };
           },2000);
        })
    }
}