import { AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, inject } from '@angular/core';
import { ChatService } from '../../../../services/chat/chat.service';
import { Subscription, retry, switchMap, timer } from 'rxjs';
import { Message } from '../../../../core/message.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit{
messages: Message[] = [];
@Input() user : string = "";
@ViewChild('chatContainer') chatContainer! : ElementRef;
chatService: ChatService = inject(ChatService);
messageSubscription: Subscription = new Subscription();

constructor(){}

ngOnInit(): void {
    this.messageSubscription = timer(0, 1000).pipe(
    switchMap(() => this.chatService.getMessages()),
    retry()
  ).subscribe((messages) => this.messages = messages)

  setTimeout(() => {
    this.scrollToBottom()
  }, 100)
  
  this.chatService.reload.subscribe(() => { setTimeout(() => {
    this.scrollToBottom()
  }, 200)})
}

scrollToBottom(){
  this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
}

ngOnDestroy(): void {
  this.messageSubscription.unsubscribe();
}
}