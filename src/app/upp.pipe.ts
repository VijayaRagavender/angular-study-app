import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'upp'
})
export class UppPipe implements PipeTransform {
  
    transform(value : string, args ? : any){
        return value.toLocaleUpperCase;
    }
}