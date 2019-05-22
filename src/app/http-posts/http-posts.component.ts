import { BadInputError } from '@angular/common/bad-input-error';
import { NotFoundError } from '@angular/common/not-found-error';
import { AppError } from '@angular/common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'http-posts',
  templateUrl: './http-posts.component.html',
  styleUrls: ['./http-posts.component.css']
})
export class HttpPostsComponent implements OnInit  {

  posts : any[];
  
  constructor(private services : PostService){
  }

  ngOnInit() {
     this.services.getAll().subscribe(
      posts => {
        this.posts = posts;
      }
    // ,error => {
    //   alert('An unexpected error occured');
    //   console.log(error);
    // }
  );
  }

  createPosts(input : HTMLInputElement){
   let postObj =  {title : input.value};
   this.posts.splice(0,0,postObj);

    this.services.create(postObj).subscribe(
      newPosts =>  {
        postObj['id'] = newPosts.id;
      }, (error : AppError) => {
        this.posts.splice(0,1);

        if(error instanceof BadInputError){
          alert('The requested url is not found');
          // this.form.setErrors(error.json());
        }
        else throw error
      //   {
      //   alert('An unexpected error occured');
      //   console.log(error);
      // }
    })
  }

  updatePosts(post){
      this.services.update(post).subscribe(
        updatePosts =>   console.log(updatePosts)
      , error => {
        alert('An unexpected error occured');
        console.log(error);
      })
    //  post = { id : post.id, 
    //    title : 'vijay'};
    //    this.http.put(this.url + '/' + post.id, JSON.stringify(post)).subscribe(response => {
    //     console.log(response.json());
    //   })
     }
 
     deletePosts(post){
      //this.services.delete(post.id); //--> Promise implementation
     // The below given is the observable implementation.
       let index = this.posts.indexOf(post);
        this.posts.splice(index,1);
      this.services.delete(post.id).subscribe(null,
      (error : AppError) => {
        this.posts.splice(index,0,post);
        if( error instanceof NotFoundError){
          alert('The post has already deleted');
          console.log(error);
        }
        else throw error
       });
      }
}
