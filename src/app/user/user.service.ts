import { Injectable } from '@angular/core';
import {User} from "./user";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import { HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class UserService {
  private apiURL = environment.apiURL+ "/users";
  users!: User[]; // zero length + 1
  currentUser?: User; // memory || localstorage
  constructor(private readonly router: Router,private readonly http:HttpClient) {
    this.users = JSON.parse(<string>localStorage.getItem('users')) ?? [];
    this.currentUser = JSON.parse(<string>localStorage.getItem("current_user"));
  }
  getId() {
    return this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1;
  }
  register(user: User){
    // let newUser = {...user, id: this.getId()};
    // this.users.push(newUser);
    // localStorage.setItem("users", JSON.stringify(this.users));
    // this.currentUser = newUser;
    // localStorage.setItem("current_user", JSON.stringify(user));
    // this.router.navigate(["main"]).then();
    return this.http.post(this.apiURL, user);
  }
  login(email: string, password: string) {
    let user = this.users.find((user) => user.email == email && user.password == password);
    if (user) {
      this.currentUser = user;
      localStorage.setItem("current_user", JSON.stringify(user));
      this.router.navigate(['main']).then();
    } else {
      alert("Username or password mismatched!");
    }
  }

  logout() {
    this.router.navigate(['']).then(() => {
      this.currentUser = undefined;
      localStorage.removeItem("current_user");
    });
  }

  getFriends(): Array<User> {
    if (!this.currentUser?.friends) {
      Object.assign(this.currentUser, {...this.currentUser, friends: []});
      localStorage.setItem("current_user", JSON.stringify(this.currentUser));
    }
    return this.users.filter(u => this.currentUser?.friends?.includes(u.id));
  }

  getSuggestions(): Array<User> {

    // current_user 1
    // friends [2, 3, 5]
    // e = [1, 2, 3, 5]
    // users [1, 2, 3, 4, 5, 6]
    // suggestions [4, 6]
    const e: Array<number> = []; // [1, 2, 3,5]
    if (this.currentUser) {
      e.push(this.currentUser.id);
    } else {
      return [];
    }
    if (this.currentUser?.friends) {
      this.currentUser?.friends.forEach(f => e.push(f));
    }
    return this.users.filter(u => !e.includes(u.id));
  }

  addFriend(userId: number) {
    const isAlreadyFriend = this.currentUser?.friends?.includes(userId);
    if (!isAlreadyFriend) {
      const temp: Array<number> = []
      this.currentUser?.friends?.forEach(f => temp.push(f));
      Object.assign(this.currentUser, {...this.currentUser, friends: [...temp, userId]})
      localStorage.setItem("current_user", JSON.stringify(this.currentUser));
      this.users = this.users.map(user => {
        if (user.id === this.currentUser?.id) {
          return this.currentUser;
        }
        return user;
      });
      localStorage.setItem("users", JSON.stringify(this.users));
    }
  }
}
