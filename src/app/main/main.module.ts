import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import {RouterModule, Routes} from "@angular/router";
import {PostModule} from "../posts/post.module";
import {PostComponent} from "../posts/post/post.component";
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
    PostModule
  ]
})
export class MainModule { }
