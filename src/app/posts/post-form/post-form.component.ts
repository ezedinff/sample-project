import { Component, OnInit } from '@angular/core';
import {PostModel} from "../post-model";
import {PostService} from "../post.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  post!: PostModel;
  titleError = "Title is required";
  constructor(private readonly postService: PostService) { }

  ngOnInit(): void {
    this.post = new PostModel("", "");
  }

  handleSubmit (form: NgForm) {
    // const response = this.postService.createPost(this.post);
    // const checkForNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    // const titleControl = form.control.get("title");
    // console.log(form.valid, titleControl?.value);
    // checkForNumber.forEach((n) => {
    //   if (titleControl?.value.indexOf(n) !== -1) {
    //     this.titleError = "title should not have a number";
    //     titleControl?.setErrors({
    //       "shouldn't_have_a_number": "title should not have a number"
    //     })
    //   }
    // });
    // if (response) {
    //   alert("Post created Successfully!");
    //   form.resetForm();
    // }
    this.postService.createPost(this.post).subscribe();
  }
}
