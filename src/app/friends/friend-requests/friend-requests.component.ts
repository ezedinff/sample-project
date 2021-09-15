import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-friend-requests',
  templateUrl: './friend-requests.component.html',
  styleUrls: ['./friend-requests.component.scss']
})
export class FriendRequestsComponent implements OnInit {
  users!:any;
  constructor(private readonly userService:UserService) { }

  ngOnInit(): void {
   this.users=this.userService.notFriends;
  }

  addFriend(id:number){
    this.userService.makeFriend(id);
    this.users=this.userService.notFriends;
  }

}
