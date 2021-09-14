import { Component, OnInit } from '@angular/core';
import {UserService} from "../../user/user.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  menus = [
    {name: "Home", path: "/main/feeds"},
    {name: "Messages", path: "/main/messages"},
    {name: "Friends", path: "/main/friends"}
  ]
  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {
  }

  getCurrentUserName() {
    return `${this.userService.currentUser?.firstName} ${this.userService.currentUser?.lastName}`;
  }

  logout() {
    this.userService.logout();
  }
}
