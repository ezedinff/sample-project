import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendComponent } from './friend/friend.component';
import { FriendRequestsComponent } from './friend-requests/friend-requests.component';
import { FriendListComponent } from './friend-list/friend-list.component';



@NgModule({
  declarations: [
    FriendComponent,
    FriendRequestsComponent,
    FriendListComponent,],
    exports:[FriendComponent,
      FriendRequestsComponent,
       FriendListComponent,],
  imports: [
    CommonModule
  ]
})
export class FriendsModule { }
