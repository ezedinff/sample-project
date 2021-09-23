import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
export interface Message {
  sender_id: string;
  message: string;
  date: string;
}
export interface Chat {
  id: string;
  participants: Array<string>;
  messages: Array<Message>;
}
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  selectedUser: any; //
  chat$!: Observable<Chat>;
 // 
  // CURRENT USER AND SELECTED USER
  // current_user = 2
  // selected_user = 3
  // incoming = current_user != sender_id
  // outgoing = current_user == sender_id
  constructor(
    private userService: UserService,
    private firestore: AngularFirestore) { 
      
    }

  getChat$(selectedUser: string) {
    return this.firestore.collectionGroup("chats")
    .valueChanges()
    .pipe(
      tap((response: any) => console.log(response, selectedUser, this.userService.currentUser.user._id)),
      map((chats) => chats.filter((chat: any) => 
      chat.participants.includes(selectedUser) && chat.participants.includes(this.userService.currentUser.user._id)))
    )
  }
  // pio
  setSelectedUser(user: User) {
    if (!this.selectedUser) {
      this.selectedUser = {};
    }
    Object.assign(this.selectedUser, user);
    this.chat$ = this.getChat$(this.selectedUser);
    // this.getChat(this.selectedUser._id).subscribe(r => console.log(r));
  }
}
