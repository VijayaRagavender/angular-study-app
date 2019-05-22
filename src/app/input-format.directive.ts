import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat') format :string;
  constructor(private el : ElementRef) { }
 @HostListener('focus') onfocus(){
   let value : string = this.el.nativeElement.value ;
      this.el.nativeElement.value = value.toUpperCase(); 
 }

 @HostListener('blur') onBlur(){
      let value : string = this.el.nativeElement.value ;
      if(this.format == 'tolowercase')
        {
           this.el.nativeElement.value = value.toLowerCase(); 
        }
          else {
            this.el.nativeElement.value = value.toUpperCase();
          }
  }

}
