import { Injectable } from '@angular/core';
import {User, UserResponse} from "./user";
import {Router} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {apiRoutes, getUrl} from "../constants";


@Injectable({providedIn: 'root'})
export class UserService {
  currentUser!: UserResponse; // memory || localstorage
  counter = new BehaviorSubject(0);
  constructor(private readonly router: Router,
              private readonly httpClient: HttpClient) {
    this.currentUser = JSON.parse(<string>localStorage.getItem("current_user"));
  }
  getUsers(): Promise<Array<User>> {
    return this.httpClient.get<Array<User>>(getUrl("/users")).toPromise();
  }

  createUser(user: User): Promise<UserResponse> {
    return this.httpClient.post<UserResponse>(getUrl(apiRoutes.auth.register), user).toPromise();
  }
  async register(user: User) {
    this.createUser(user).then((loggedUser) => {
      this.currentUser = loggedUser;
      localStorage.setItem("current_user", JSON.stringify(loggedUser));
      this.router.navigate(["main"]).then();
    }).catch((err) => {
      alert("user is not created!");
    })
  }
  login(username: string, password: string) {
    this.httpClient.post<UserResponse>(getUrl(apiRoutes.auth.login), {username, password}).toPromise()
      .then((loggedUser) => {
        this.currentUser = loggedUser;
        localStorage.setItem("current_user", JSON.stringify(loggedUser));
        this.router.navigate(['main']).then();
      })
      .catch((err) => alert(err.error.message))
  }

  logout() {
    this.router.navigate(['']).then(() => {
      localStorage.removeItem("current_user");
    });
  }

  async getFriends(): Promise<Array<User>> {
    if (!this.currentUser?.user.friends) {
      Object.assign(this.currentUser, {...this.currentUser, friends: []});
      localStorage.setItem("current_user", JSON.stringify(this.currentUser));
    }
    const users = await this.getUsers();
    return users.filter(u => this.currentUser.user.friends?.includes(u._id));
  }

  async getSuggestions(): Promise<Array<User>> {

    // current_user 1
    // friends [2, 3, 5]
    // e = [1, 2, 3, 5]
    // users [1, 2, 3, 4, 5, 6]
    // suggestions [4, 6]
    const e: Array<string> = []; // [1, 2, 3,5]
    if (this.currentUser) {
      e.push(this.currentUser.user._id);
    } else {
      return [];
    }
    if (this.currentUser.user.friends) {
      this.currentUser.user.friends.forEach((f: any) => e.push(f));
    }
    const users = await this.getUsers()
    return users.filter(u => !e.includes(u._id));
  }

  async addFriend(userId: string) {
    const isAlreadyFriend = this.currentUser.user.friends?.includes(userId);
    if (!isAlreadyFriend) {
      console.log(userId);
      const temp: Array<number> = []; // friend list
      this.currentUser.user.friends?.forEach((f: any) => temp.push(f));
      Object.assign(this.currentUser, {...this.currentUser, user: {...this.currentUser.user, friends: [...temp, userId]}})
      localStorage.setItem("current_user", JSON.stringify(this.currentUser));
      await this.httpClient.post(getUrl(apiRoutes.users.addFriend), {userId}).toPromise();
    }
  }
}
