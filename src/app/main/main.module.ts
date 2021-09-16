import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import {RouterModule, Routes} from "@angular/router";
import {PostModule} from "../posts/post.module";
import {PostComponent} from "../posts/post/post.component";
<<<<<<< HEAD
import { FriendsModule } from '../friends/friends.module';
import { FriendComponent } from '../friends/friend/friend.component';
=======
import {FriendsPageComponent} from "../friends/friends-page/friends-page.component";
import {FriendsModule} from "../friends/friends.module";
>>>>>>> master
const routes: Routes = [
  {
    path: "", // /main
    component: MainComponent,
    children: [
      {
        path: "feeds", // /main/feeds
        component: PostComponent
      },
      {
<<<<<<< HEAD
        path: "friends", // /main/feeds
        component: FriendComponent
=======
        path: "friends",
        component: FriendsPageComponent
>>>>>>> master
      },
      {
        path: "",
        redirectTo: "feeds",
        pathMatch: "full"
      }
    ]
  }
]


@NgModule({
  declarations: [
    MainComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PostModule,
    FriendsModule
  ]
})
export class MainModule { }
