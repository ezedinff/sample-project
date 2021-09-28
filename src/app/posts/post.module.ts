import {NgModule} from "@angular/core";
import {Post, PostComponent} from './post/post.component';
import {PostItemComponent} from "./post-item/post-item.component";
import {PostService} from "./post.service";
import {BrowserModule} from "@angular/platform-browser";
import { PostFormComponent } from './post-form/post-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommentComponent} from './comment/comment.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    PostComponent,
    PostItemComponent,
    PostFormComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    PostService
  ],
  exports: [
    PostComponent
  ]
})
export class PostModule {
  constructor() {}
}
