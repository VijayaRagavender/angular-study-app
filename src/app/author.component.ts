import { AuthorService } from './author.service';
import { Component } from '@angular/core';
@Component({
    selector : 'authors',
    template : `
                <h2> {{title}}</h2>
                <ul>
                    <li *ngFor = "let author of authors">
                    {{author}}
                    </li>
                </ul>
                `
})
export class AuthorComponent{
      title = "3 Authors";
      authors;
      constructor(authorsService : AuthorService){
          this.authors = authorsService.getAuthors();

      }
}