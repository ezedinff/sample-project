import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Post} from '../post/post.component';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent implements OnInit{

  @Input() post!: Post; // pass data from child to parent
  @Output() onPostLike = new EventEmitter(); // dispatch events from child to parent
  counter = 1;
  showCommentForm = false;
  constructor() { }
  handleClick() {
    this.onPostLike.emit(this.post?.id);
  }
  toggleCommentForm() {
    this.showCommentForm = !this.showCommentForm;
  }

  ngOnInit(): void {
  }

}
