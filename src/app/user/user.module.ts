import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent
  ],
  exports: [
    UsersComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
})
export class UserModule { }
