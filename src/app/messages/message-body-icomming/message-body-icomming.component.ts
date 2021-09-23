import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../message.service';

@Component({
  selector: 'app-message-body-icomming',
  templateUrl: './message-body-icomming.component.html',
  styleUrls: ['./message-body-icomming.component.scss']
})
export class MessageBodyIcommingComponent implements OnInit {
  @Input()
  message!: Message;
  constructor() { }

  ngOnInit(): void {
  }

}
