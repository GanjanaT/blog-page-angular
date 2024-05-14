import { Component, OnInit, inject } from '@angular/core';
import { UsernameInputComponent } from './components/username-input/username-input.component';
import { ChatService } from '../../services/chat/chat.service';
import { FormsModule } from '@angular/forms';
import { Message } from '../../core/message.model';
import { Subscription, interval, retry, timer } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './components/chat/chat.component';

@Component({
  selector: 'app-chat-page',
  standalone: true,
  imports: [UsernameInputComponent, FormsModule, CommonModule, ChatComponent],
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.css',
})
export class ChatPageComponent {
  user: string = '';
  message: string = '';
  messages: Message[] = [];

  chatService: ChatService = inject(ChatService);

  // messageSubscription: Subscription = new Subscription();

  // ngOnInit(): void {
  //   this.messageSubscription = timer(0, 500).subscribe(() => {
  //     this.chatService
  //       .getMessages()
  //       .subscribe((messages) => (this.messages = messages));
  //       retry()
  //   });
  // }

  // ngOnDestroy(): void {
  //   this.messageSubscription.unsubscribe();
  // }

  onUsernameSubmit(username: string) {
    this.user = username;
  }

  onSendMessage() {
    if (this.message.length === 0) {
      console.log('skriv in meddelande');
    } else {
      this.chatService.addMessage(new Message(this.message, this.user));
      this.message = '';
    }
  }
}
