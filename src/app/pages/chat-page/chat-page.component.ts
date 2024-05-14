import { Component } from '@angular/core';
import { UsernameInputComponent } from './components/username-input/username-input.component';
import { FormsModule } from '@angular/forms';
import { Message } from '../../core/message.model';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './components/chat/chat.component';
import { ChatFormComponent } from './components/chat-form/chat-form.component';

@Component({
  selector: 'app-chat-page',
  standalone: true,
  imports: [
    UsernameInputComponent,
    FormsModule,
    CommonModule,
    ChatComponent,
    ChatFormComponent,
  ],
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.css',
})
export class ChatPageComponent {
  user: string = '';
  message: string = '';
  messages: Message[] = [];

  onUsernameSubmit(username: string) {
    this.user = username;
  }
}
