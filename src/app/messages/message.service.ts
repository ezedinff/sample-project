import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, switchMap, takeLast, tap } from 'rxjs/operators';
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
      chat.participants.includes(selectedUser) && chat.participants.includes(this.userService.currentUser.user._id))),
      tap(chat => console.log("filtered chats", chat)),
      map(chats => chats[0])
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
  createNewChat(newMessage: Message) {
    const doc = this.firestore.collection('chats').doc();
    doc.set({
      participants: [this.userService.currentUser.user._id, this.selectedUser._id],
      id: doc.ref.id,
      messages: [newMessage]
    })
  }
  sendMessage(chatId: string, message: string) {
    const newDocument = {
      message,
      sender_id: this.userService.currentUser.user._id,
      date: new Date().toDateString()
    };
    if (chatId == null) {
      this.createNewChat(newDocument)
    } else {
      const chatRef = this.firestore.doc<AngularFirestoreDocument<Chat>>(`chats/${chatId}`);
      // @ts-ignore
      chatRef.ref.get().then((data) => {
        const chat = (data.data() as unknown) as Chat;
        console.log(data.data());
        this.firestore.collection('chats').doc(chatId).update({messages: [...chat.messages, newDocument]})
      })
      // chatRef.valueChanges().subscribe(r => {
      //   const chat = (r as unknown) as Chat;
      //   // @ts-ignore
      //   this.firestore.collection('chats').doc(chatId).update({messages: [...chat.messages, newDocument]});
      // });
    }
  }
}
