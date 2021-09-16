import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {User} from "../../user/user";
import {UserService} from "../../user/user.service";

@Component({
  selector: 'app-user-avator',
  templateUrl: './user-avator.component.html',
  styleUrls: ['./user-avator.component.scss']
})
export class UserAvatorComponent implements OnInit {
  @Input()
  isFriend = false;
  @Input()
  user!: User;

  @Output()
  onAddUser = new EventEmitter();
  ngOnInit(): void {
  }

  addUser(){
    this.onAddUser.emit(this.user.id);
  }

}
