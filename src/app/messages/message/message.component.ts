import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/user/user';
import { UserService } from 'src/app/user/user.service';
import { Chat, MessageService } from '../message.service';
// centeral state - service - share with component
// parent - child
// child - parent
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  selectedUser?: User;
  chat$!: Observable<Chat>;
  chat!: Chat;
  friends!: Array<User>;
  constructor(
    private readonly messageService: MessageService,
    private readonly userService: UserService) { }

  ngOnInit(): void {
    this.selectedUser = this.messageService.selectedUser;
    this.chat$ = this.messageService.chat$;
    this.userService.getFriends()
                    .then((friends) => {
                      this.friends = friends;
                    });
  }
  onUserSelected(user: User) {
    this.selectedUser = user;
    this.messageService.setSelectedUser(user);
    this.messageService.getChat$(this.selectedUser?._id ?? "").subscribe(chat => this.chat = chat);
  }
}
