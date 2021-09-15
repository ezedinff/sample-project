import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss']
})
export class FriendListComponent implements OnInit {

  users!:any;
  constructor(private readonly userService:UserService) { }

  ngOnInit(): void {
    this.users=this.userService.friends;
  }


}
