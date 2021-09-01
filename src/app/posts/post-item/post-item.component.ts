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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostItemComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, OnDestroy {

  @Input() post: Post | undefined; // pass data from child to parent
  @Output() onPostLike = new EventEmitter(); // dispatch events from child to parent
  interval: any;
  counter = 1;
  constructor() { }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  ngDoCheck(): void {
    console.log("component changes checked");
  }

  ngOnInit(): void {
    // fetch data
    //
    console.log("Component initialized!");
    this.interval = setInterval(() => {
      this.counter += 1;
    }, 1000);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("component's on change called");
  }
  handleClick() {
    this.onPostLike.emit(this.post?.id);
  }

  ngAfterContentInit(): void {
    console.log("content initialized");
  }

}
