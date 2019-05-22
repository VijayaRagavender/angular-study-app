import { FavouriteChangedInterface } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  post = {
    isFavorite : true,
    isReact : true
  }
   tweet = {
    isLiked : false,
    likesCount : 0
  }

  course = [1,2];
  semester = [1,2];
  viewMode : string ;
  resources;
  canSave = false;
  samText : string;
  samOpText : string;
  employees = [
    {code : 'Ops01' , dept : 'Operation'},
    {id : 'Dev01', dept : 'Dev' },
    {id : 'Tes01', dept : 'Test'} 
  ];
  
  onAdd(){
    this.employees.push({code : 'SUP' , dept:'SUPPORT'});
  }

  loadResources(){
    this.resources = [
      {name:'RES1'},
      {name:'RES2'},
      {name:'RES3'}
    ];
  }

  task = {
    title : 'tweet',
    assignee : null
  }

  onKeyPress(){
    this.samOpText = this.samText.toUpperCase();
    return this.samOpText;
  }
  onClickSaveBtn(){
    this.canSave = !this.canSave;
  }
  trackResource(index , resources){
    return resources ? resources.name : undefined; 
  }
  onRemove(emp){
    let index = this.employees.indexOf(emp);
    console.log(index);
    this.employees.splice(index , 1);
  }
  onFavoriteChanged(eventArgs : FavouriteChangedInterface) {
    console.log('favorite changed ', eventArgs);
  }

  Reacted(eventArgs : FavouriteChangedInterface) {
    console.log("Reacted for the post" , eventArgs)
  }
}
