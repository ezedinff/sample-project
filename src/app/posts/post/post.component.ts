import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {PostService} from "../post.service";
import {UserService} from "../../user/user.service";

export interface Comment {
  text: string;
  userId: string;
}

export interface Post {
  _id?: string;
  userId?: string;
  title: string;
  description: string;
  likes: number;
  comments: Array<Comment>;
}


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PostComponent implements OnInit {
  title = "title from post component";
 // @ViewChild("postTitle") postTitle: HTMLElement;
  posts!: Array<Post>;
  constructor(private readonly postService: PostService,
              private readonly userService: UserService) { }

  ngOnInit(): void {
   this.postService.getPosts().then(posts => {
     this.posts = posts;
   }).catch(err => alert(err.error.message));
  }

  onButtonClicked(id: string) {
    this.postService.posts = this.postService.posts.map(post => {
      if (post._id === id) {
        post.likes += 1;
      }
      return post;
    })
  }
  getPosts(): Array<Post> {
    return  this.postService.posts;
  }
  getTitle() {
    return this.title;
  }

  getUser() {
    return this.userService.currentUser;
  }
}
