import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import {RouterModule, Routes} from "@angular/router";
import {PostModule} from "../posts/post.module";
import {PostComponent} from "../posts/post/post.component";
import {FriendsPageComponent} from "../friends/friends-page/friends-page.component";
import {FriendsModule} from "../friends/friends.module";
import { MessagesModule } from '../messages/messages.module';
import { MessageComponent } from '../messages/message/message.component';
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
        path: "friends",
        component: FriendsPageComponent
      },
      {
        path: "messages",
        component: MessageComponent
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
    FriendsModule,
    MessagesModule
  ]
})
export class MainModule { }
