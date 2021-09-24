import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/user/user';
import { UserService } from 'src/app/user/user.service';
import { Chat } from '../message.service';

@Component({
  selector: 'app-message-body',
  templateUrl: './message-body.component.html',
  styleUrls: ['./message-body.component.scss']
})
export class MessageBodyComponent implements OnInit {
  @Input()
  selectedUser!: User;
  @Input()
  chat: any = {};

  current_user = "2";
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    console.log(this.chat)
  }

}
