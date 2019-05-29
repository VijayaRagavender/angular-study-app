import { AppErrorHandler } from '@angular/common/app-error-handler';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GitHubServices } from './services/gitHub.services';
import { PostService } from './services/post.service';
import { TitleCasingPipe } from './titlecasing/titlecasing.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { UppPipe } from './upp.pipe';
import { SummaryPipe } from './summary.pipe';
import { FitnessComponent } from './fitness.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { AuthorService } from './author.service';
import { AuthorComponent } from './author.component';
import { EmailService } from './email.service';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ErrorHandler } from '@angular/core';


import { AppComponent } from './app.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { TitlecasingComponent } from './titlecasing/titlecasing.component';
import { PanelComponent } from './panel/panel.component';
import { LikesComponent } from './likes/likes.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { HttpPostsComponent } from './http-posts/http-posts.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent, 
    NavigationbarComponent,
    AuthorComponent,
    AuthorsComponent,
    FitnessComponent,
    SummaryPipe,
    UppPipe,
    FavoriteComponent,
    TitlecasingComponent,
    TitleCasingPipe,
    PanelComponent,
    LikesComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    ChangePasswordFormComponent,
    HttpPostsComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    GithubProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path : '', 
        component : HomeComponent 
      },
      {
        path :'followers/:id/:username', /* /:username denotes query parameter which will be generated dynamically in run time*/
        component : GithubProfileComponent 
      },
      {
        path :'followers', 
        component : GithubFollowersComponent
      },
      {
        path :'posts', 
        component : HttpPostsComponent
      },
      {
        path :'**', 
        component : NotFoundComponent 
      },

    ])
  ],
  providers: [
    PostService,
    CoursesService,
    EmailService,
    AuthorService,
    AuthorsService,
    GitHubServices,
    {provide : ErrorHandler , useClass : AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
