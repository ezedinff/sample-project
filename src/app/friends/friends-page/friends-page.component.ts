import { Component, OnInit } from '@angular/core';
import {User} from "../../user/user";
import {UserService} from "../../user/user.service";

@Component({
  selector: 'app-friends-page',
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.scss']
})
export class FriendsPageComponent implements OnInit {
  suggestions: Array<User> = [];
  friends: Array<User> = [];
  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {
    this.userService.getFriends().then((friends) => {
      this.friends = friends;
    })
    this.userService.getSuggestions().then((suggestions) => {
      this.suggestions = suggestions;
    });
  }
  onAddUser(userId: string) {
    this.userService.addFriend(userId);
    this.userService.getFriends().then((friends) => {
      this.friends = friends;
    })
    this.userService.getSuggestions().then((suggestions) => {
      this.suggestions = suggestions;
    });
  }
}
