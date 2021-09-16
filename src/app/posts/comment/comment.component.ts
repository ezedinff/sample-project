import {Component, Input, OnInit} from '@angular/core';
import {PostService} from "../post.service";
import { Post } from '../post/post.component';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comments!: Array<string>; // string[] | undefined
  @Input() post!: Post;
  comment="";
  constructor(private readonly postService: PostService) { }

  ngOnInit(): void {
  }
  addComment() {
    // alert(this.comment);
  Object.assign(this.post, {...this.post, comments: [...this.comments, this.comment]})
    this.postService.createComment(this.post);
    console.log(this.post);
  }
}
