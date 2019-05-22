import { Component, Input } from '@angular/core';

@Component({
  selector: 'likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent  {
 
  @Input('likes-count') likesCount:number;
  @Input()isActive : boolean;

  onSelect(){
    console.log(this.isActive);
    this.isActive = !this.isActive;
    this.isActive ? this.likesCount+=1 : this.likesCount +=-1;
    console.log(this.isActive , this.likesCount);
  }
   
}
