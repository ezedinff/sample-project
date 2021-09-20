import { Injectable } from '@angular/core';
import {Post, Comment} from "./post/post.component";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {apiRoutes, getUrl} from "../constants";
import {UserService} from "../user/user.service";

@Injectable()
export class PostService {
  posts!: Array<Post>;
  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Promise<Array<Post>> {
    return this.httpClient.get<Array<Post>>(getUrl(apiRoutes.post)).toPromise();
  }

  getNextId() {
    return this.posts.length + 1;
  }
  saveToDb(posts: Array<Post>) {
    console.log(posts);
    localStorage.setItem("posts", JSON.stringify(posts));
  }
  createPost(post: Post): boolean {
    try{
      // console.log(post);
      this.httpClient.post<Post>(getUrl(apiRoutes.post), post).toPromise();
      // const newPost = {...post};
      // this.posts.push(newPost);
      // this.saveToDb(this.posts);
      return true;
    } catch (err) {
      return false;
    }
  }
  createComment(postId: string, comment: Comment) {

    this.httpClient.post<Post>(`${getUrl(apiRoutes.post)}/${postId}/comments`, comment).toPromise();

    // this.posts = this.posts.map((post) => {
    //     if (post._id === postId) {
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
  }


}
