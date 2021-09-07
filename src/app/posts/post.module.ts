import {NgModule} from "@angular/core";
import {Post, PostComponent} from "./post/post.component";
import {PostItemComponent} from "./post-item/post-item.component";
import {PostService} from "./post.service";
import {BrowserModule} from "@angular/platform-browser";
import { PostFormComponent } from './post-form/post-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommentComponent} from "./comment/comment.component";

@NgModule({
  declarations: [
    PostComponent,
    PostItemComponent,
    PostFormComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
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
  constructor() {
    const posts: Post[] = [
      {
        id: 1,
        title: 'post 1',
        description: 'Even though the parameter s didn’t have a type annotation, TypeScript used the types of the forEach function, along with the inferred type of the array, to determine the type s will have.',
        likes: 20,
        comments: []
      },
      {
        id: 2,
        title: 'Post 2',
        description: 'This process is called contextual typing because the context that the function occurred within informs what type it should have.',
        likes: 30,
        comments: []
      }
    ];
    const p = localStorage.getItem("posts");
    if (!p) {
      localStorage.setItem("posts", JSON.stringify(posts));
    }
  }
}
