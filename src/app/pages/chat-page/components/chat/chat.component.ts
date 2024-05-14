import { Component, Input, inject } from '@angular/core';
import { ChatService } from '../../../../services/chat/chat.service';
import { Subscription, retry, timer } from 'rxjs';
import { Message } from '../../../../core/message.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
messages: Message[] = [];
@Input() user : string = "";

chatService: ChatService = inject(ChatService);

messageSubscription: Subscription = new Subscription();

ngOnInit(): void {
  this.messageSubscription = timer(0, 500).subscribe(() => {
    this.chatService
      .getMessages()
      .subscribe((messages) => (this.messages = messages));
      retry()
  });
}

ngOnDestroy(): void {
  this.messageSubscription.unsubscribe();
}

}
