import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
   styleUrls: ['./favorite.component.css'],
   encapsulation: ViewEncapsulation.None
})
export class FavoriteComponent  {

  
   @Input('is-favorite') isSelected : boolean;
   @Output('change') click = new EventEmitter();

   @Input('isReact') react : boolean;
   @Output() onReact = new EventEmitter();
  
   onClick(){
    console.log('Tweet posted');
    this.isSelected = !this.isSelected;
    this.react = !this.react;
     this.click.emit({newValue : this.isSelected});
     this.onReact.emit({newValue : this.react});
    // this.change.emit(this.isSelected);
  }

}

export interface FavouriteChangedInterface {

  newValue : boolean;
}
