import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'titlecasing'
})
export class TitleCasingPipe implements PipeTransform {

    transform (input : string , args ? : string){
         if (!input) {
            return '';
        } else {
            return input.replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase() ));
        }
    }
}