import { Injectable } from '@angular/core';
import {Post} from "./post/post.component";
import {PostModel} from "./post-model";

@Injectable()
export class PostService {
  posts: Array<Post> = JSON.parse(localStorage.getItem("posts") ?? "");
  constructor() {
  }
  getNextId() {
    return this.posts.length + 1;
  }
  saveToDb(posts: Array<Post>) {
    console.log(posts);
    localStorage.setItem("posts", JSON.stringify(posts));
  }
  createPost(post: PostModel): boolean {
    try{
      const newPost = {...post, id: this.getNextId()};
      this.posts.push(newPost);
      this.saveToDb(this.posts);
      return true;
    } catch (err) {
      return false;
    }
  }
}
