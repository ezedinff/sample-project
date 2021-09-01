import {NgModule} from "@angular/core";
import {PostComponent} from "./post/post.component";
import {PostItemComponent} from "./post-item/post-item.component";
import {PostService} from "./post.service";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    PostComponent,
    PostItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    PostService
  ],
  exports: [
    PostComponent
  ]
})
export class PostModule {}
