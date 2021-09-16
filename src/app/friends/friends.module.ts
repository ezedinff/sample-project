import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { FriendComponent } from './friend/friend.component';
import { FriendRequestsComponent } from './friend-requests/friend-requests.component';
import { FriendListComponent } from './friend-list/friend-list.component';
=======
import { FriendsPageComponent } from './friends-page/friends-page.component';
import { UserAvatorComponent } from './user-avator/user-avator.component';
import { UserInfoComponent } from './user-info/user-info.component';
>>>>>>> master



@NgModule({
  declarations: [
<<<<<<< HEAD
    FriendComponent,
    FriendRequestsComponent,
    FriendListComponent,],
    exports:[FriendComponent,
      FriendRequestsComponent,
       FriendListComponent,],
  imports: [
    CommonModule
=======
    FriendsPageComponent,
    UserAvatorComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FriendsPageComponent
>>>>>>> master
  ]
})
export class FriendsModule { }
