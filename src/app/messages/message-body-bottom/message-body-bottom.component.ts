import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-body-bottom',
  templateUrl: './message-body-bottom.component.html',
  styleUrls: ['./message-body-bottom.component.scss']
})
export class MessageBodyBottomComponent implements OnInit {
  message = '';
  @Input()
  chatId!: string;
  constructor(private readonly messageService: MessageService) { }

  ngOnInit(): void {
  }
  onSend() {
    this.messageService.sendMessage(this.chatId, this.message);
  }
}
