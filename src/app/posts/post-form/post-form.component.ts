import { Component, OnInit } from '@angular/core';
import {PostService} from "../post.service";
import {NgForm} from "@angular/forms";
import {Post} from "../post/post.component";

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
  constructor(private readonly postService: PostService) { }

  ngOnInit(): void {
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
    this.postService.createPost(form.value);
  }
}
