import { Injectable } from '@angular/core';
import {User} from "./user";
import {Router} from "@angular/router";

@Injectable({providedIn: 'root'})
export class UserService {
  users!: User[]; // zero length + 1
  currentUser!: User; // memory || localstorage
  constructor(private readonly router: Router) {
    this.users = JSON.parse(<string>localStorage.getItem('users')) ?? [];
    this.currentUser = JSON.parse(<string>localStorage.getItem("current_user")) ?? "";
  }
  getId() {
    return this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1;
  }
  register(user: User) {
    this.users.push({...user, id: this.getId()});
    localStorage.setItem("users", JSON.stringify(this.users));
    this.currentUser = user;
    localStorage.setItem("current_user", JSON.stringify(user));
    this.router.navigate(["feeds"]).then();
  }
  login(email: string, password: string) {
    let user = this.users.find((user) => user.email == email && user.password == password);
    if (user) {
      this.currentUser = user;
      localStorage.setItem("current_user", JSON.stringify(user));
      this.router.navigate(['feeds']).then();
    } else {
      alert("Username or password mismatched!");
    }
  }
}
