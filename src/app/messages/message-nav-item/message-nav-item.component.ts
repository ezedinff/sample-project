import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-message-nav-item',
  templateUrl: './message-nav-item.component.html',
  styleUrls: ['./message-nav-item.component.scss']
})
export class MessageNavItemComponent implements OnInit {
  @Input()
  user!: User;
  constructor() { }

  ngOnInit(): void {
  }

}
