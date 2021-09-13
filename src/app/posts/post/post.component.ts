import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {PostService} from "../post.service";
import {UserService} from "../../user/user.service";

export interface Post {
  id: number;
  title: string;
  description: string;
  likes: number;
  comments: Array<string>;
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
  constructor(private readonly postService: PostService,
              private readonly userService: UserService) { }

  ngOnInit(): void {
  }

  onButtonClicked(id: number) {
    this.postService.posts = this.postService.posts.map(post => {
      if (post.id === id) {
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
