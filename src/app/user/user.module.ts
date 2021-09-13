import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import {ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import {RouterModule} from "@angular/router";
import {UserService} from "./user.service";



@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    LoginComponent
  ],
  exports: [
    UsersComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
})
export class UserModule { }
