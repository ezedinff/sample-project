import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-message-header',
  templateUrl: './message-header.component.html',
  styleUrls: ['./message-header.component.scss']
})
export class MessageHeaderComponent implements OnInit {
  @Input()
  user!: User;
  constructor() { }

  ngOnInit(): void {
  }

}
