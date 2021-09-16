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
    this.friends = this.userService.getFriends();
    this.suggestions = this.userService.getSuggestions();
  }
  onAddUser(userId: number) {
    this.userService.addFriend(userId);
    this.friends = this.userService.getFriends();
    this.suggestions = this.userService.getSuggestions();
  }
}
