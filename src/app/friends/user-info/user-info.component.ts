import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../user/user";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  isFriend = true;
  @Input()
  user!: User;
  constructor() { }

  ngOnInit(): void {
  }

  calculateAge(bod: string | null) {
 //   return new Date(bod) - Date.now()
    return 21;
  }
}
