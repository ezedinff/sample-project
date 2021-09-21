import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {PostService} from "../post.service";
import {NgForm} from "@angular/forms";
import {Post} from "../post/post.component";
import {UserService} from "../../user/user.service";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  post = {
    title: "",
    description: ""
  }
  titleError = "Title is required";
  constructor(private readonly postService: PostService,
              private readonly userService: UserService) { }

  ngOnInit(): void {
  }

  handleSubmit (form: NgForm) {
    if (form.valid) {
      this.postService.createPost({...form.value, userId: this.userService.currentUser.user._id, likes: 0, comments: []})
        .then((newP) => console.log(newP));
    }
  }
}
