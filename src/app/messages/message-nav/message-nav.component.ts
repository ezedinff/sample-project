import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/user/user';
import { UserService } from 'src/app/user/user.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-nav',
  templateUrl: './message-nav.component.html',
  styleUrls: ['./message-nav.component.scss']
})
export class MessageNavComponent implements OnInit {
  @Input()
  friends!: Array<User>;
  @Output()
  onSelectedUser = new EventEmitter();
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }
  setSelUser(user: User) {
    this.onSelectedUser.emit(user);
  }
}
