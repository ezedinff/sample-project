import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsPageComponent } from './friends-page/friends-page.component';
import { UserAvatorComponent } from './user-avator/user-avator.component';
import { UserInfoComponent } from './user-info/user-info.component';
import {AgePipe} from "../age.pipe";



@NgModule({
  declarations: [
    FriendsPageComponent,
    UserAvatorComponent,
    UserInfoComponent,
    AgePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FriendsPageComponent
  ]
})
export class FriendsModule { }
