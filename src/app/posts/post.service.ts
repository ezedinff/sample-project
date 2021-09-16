import { Injectable } from '@angular/core';
import {Post} from "./post/post.component";
import {PostModel} from "./post-model";
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PostService {
  private apiURL = environment.apiURL+ "/posts";
  posts: Array<Post> = JSON.parse(localStorage.getItem("posts") ?? "");
  constructor(private readonly http:HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiURL);
  }
  getNextId() {
    return this.posts.length + 1;
  }
  saveToDb(posts: Array<Post>) {
    console.log(posts);
    localStorage.setItem("posts", JSON.stringify(posts));
  }
  createPost(post: PostModel){
    // try{
    //   const newPost = {...post, id: this.getNextId()};
    //   this.posts.push(newPost);
    //   this.saveToDb(this.posts);
    //   return true;
    // } catch (err) {
    //   return false;
    // }
    return this.http.post(this.apiURL, post);
  }
  createComment(post:Post) {
    // this.posts = this.posts.map((post) => {
    //     if (post.id === postId) {
    //       if (!post.comments){
    //         post.comments = [];
    //       }
    //       post.comments.push(comment);
    //     }
    //     return post;
    // });

    // const newPosts = [];
    // for (let post of this.posts) {
    //   if (post.id === postId) {
    //     // if post's comments is undefined
    //     // initialize it empty array
    //     if (!post.comments) {
    //       post.comments = [];
    //     }
    //     post.comments.push(comment);
    //   }
    //   newPosts.push(post);
    // }
    // this.posts = newPosts;
    // mutable and immutable object
    // this.saveToDb(this.posts);
    return this.http.put(`${this.apiURL}/${post.id}`, post);
  }

  addLike(post:Post){
    return this.http.put(`${this.apiURL}/${post.id}`, post);
  }


}
