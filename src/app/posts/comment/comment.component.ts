import {Component, Input, OnInit} from '@angular/core';
import {PostService} from "../post.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comments!: Array<string>; // string[] | undefined
  @Input() postId!: number;
  comment="";
  constructor(private readonly postService: PostService) { }

  ngOnInit(): void {
  }
  addComment() {
    // alert(this.comment);
    this.postService.createComment( this.postId, this.comment);
  }
}
