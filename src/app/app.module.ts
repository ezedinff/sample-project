import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PostModule} from "./posts/post.module";
import {UserModule} from "./user/user.module";
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
<<<<<<< HEAD
import { FriendsModule } from './friends/friends.module';
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> master


// admin/dashboard
// admin/users
// admin/


// auth/login
// auth/register
// auth/forgot-password
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    PostModule,
    UserModule,
    FriendsModule,
    FormsModule, // template form,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
