import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageNavComponent } from './message-nav/message-nav.component';
import { MessageNavItemComponent } from './message-nav-item/message-nav-item.component';
import { MessageHeaderComponent } from './message-header/message-header.component';
import { MessageBodyComponent } from './message-body/message-body.component';
import { MessageBodyBottomComponent } from './message-body-bottom/message-body-bottom.component';
import { MessageComponent } from './message/message.component';
import { MessageBodyIcommingComponent } from './message-body-icomming/message-body-icomming.component';
import { MessageBodyOutgoingComponent } from './message-body-outgoing/message-body-outgoing.component';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  declarations: [
    MessageNavComponent,
    MessageNavItemComponent,
    MessageHeaderComponent,
    MessageBodyComponent,
    MessageBodyBottomComponent,
    MessageComponent,
    MessageBodyIcommingComponent,
    MessageBodyOutgoingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class MessagesModule { }
