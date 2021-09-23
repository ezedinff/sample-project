import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../message.service';

@Component({
  selector: 'app-message-body-outgoing',
  templateUrl: './message-body-outgoing.component.html',
  styleUrls: ['./message-body-outgoing.component.scss']
})
export class MessageBodyOutgoingComponent implements OnInit {
  @Input()
  message!: Message;
  constructor() { }

  ngOnInit(): void {
  }

}
