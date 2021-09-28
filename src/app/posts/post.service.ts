import { Injectable } from '@angular/core';
import {Post, Comment} from "./post/post.component";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {apiRoutes, getUrl} from "../constants";
import {UserService} from '../user/user.service';
// /posts - list of post
// /posts - create a post
// /posts/id/comments // create a comment
@Injectable()
export class PostService {
  posts!: Array<Post>;
  constructor(private httpClient: HttpClient,
              private userService: UserService) {
    this.getPosts().then(posts => {
      this.posts = posts;
    }).catch(err => alert(err.error.message));
  }

  getPosts(): Promise<Array<Post>> {
    return this.httpClient.get<Array<Post>>(getUrl(apiRoutes.post)).toPromise();
  }
 async createPost(post: Post): Promise<Post> {
    const newPost = await this.httpClient.post<Post>(getUrl(apiRoutes.post), post).toPromise();
    this.posts.push(newPost);
    return newPost;
  }
  saveToDb(posts: Array<Post>) {
    console.log(posts);
    localStorage.setItem("posts", JSON.stringify(posts));
  }

  async createComment(postId: string, comment: Comment): Promise<Post> {
     const url = getUrl(`${apiRoutes.post}/${postId}/comments`);
     const newPost = await this.httpClient.post<Post>(url, comment).toPromise();
      this.posts = this.posts.map((post) => {
        if (post._id === postId) {
          return newPost;
        }
        return post;
      })
     return newPost;
  }
}
