import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../../../services/chat/chat.service';


@Component({
  selector: 'app-username-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './username-input.component.html',
  styleUrl: './username-input.component.css',
})
export class UsernameInputComponent {
  usernameInput = '';

  @Output() usernameSubmit = new EventEmitter<string>() 

  chatService: ChatService = inject(ChatService);

  onClick() {
    this.usernameSubmit.emit(this.usernameInput)
    this.chatService.setUsername(this.usernameInput)
  }
}