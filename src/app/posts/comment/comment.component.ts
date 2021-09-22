import {Component, Input, OnInit} from '@angular/core';
import {PostService} from "../post.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comments: any; // string[] | undefined
  @Input() postId?: string;
  comment = "";
  constructor(private readonly postService: PostService) { }

  ngOnInit(): void {
  }
  addComment() {
    if (this.postId) {
      this.postService.createComment( this.postId, {text: this.comment, userId: ""});
    }
  }
}
