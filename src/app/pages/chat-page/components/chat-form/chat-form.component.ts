import { Component, OnInit, inject } from '@angular/core';
import { ChatService } from '../../../../services/chat/chat.service';
import { Message } from '../../../../core/message.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chat-form.component.html',
  styleUrl: './chat-form.component.css'
})
export class ChatFormComponent implements OnInit {
  message: string = '';
  username: string = ""
  chatService: ChatService = inject(ChatService);

  ngOnInit(): void {
    this.username = this.chatService.getUsername();
  }

  onSendMessage() {
    if (this.message.length === 0) {
      console.log('skriv in meddelande');
    } else {
      this.chatService.addMessage(new Message(this.message, this.username));
      this.message = '';
    }
  }

}
