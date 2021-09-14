import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "../user/login/login.component";
import {AddUserComponent} from "../user/add-user/add-user.component";
import {PostComponent} from "../posts/post/post.component"
import {HomeComponent} from "../home/home.component";
import {NotFoundComponent} from "../not-found/not-found.component";
import {AuthGuard} from "../user/auth.guard";

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "register", component: AddUserComponent},
  {
    path: "main",
    loadChildren: () => import("../main/main.module").then(m => m.MainModule),
    canActivate: [AuthGuard]
  },
  {path: "home", component: HomeComponent},
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "**", component: NotFoundComponent}
]

// users/ezedin

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
