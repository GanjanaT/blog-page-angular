import { Component, OnInit, inject } from '@angular/core';
import { ChatService } from '../../../../services/chat/chat.service';
import { Message } from '../../../../core/message.model';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './chat-form.component.html',
  styleUrl: './chat-form.component.css'
})
export class ChatFormComponent implements OnInit {
  username: string = "";
  messageForm;
  formBuilder: FormBuilder;
  chatService: ChatService = inject(ChatService);

  constructor(formBuilder: FormBuilder){
    this.formBuilder = formBuilder;
    this.messageForm = this.formBuilder.group({
      message: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.username = this.chatService.getUsername();
  }

  onEnter(){
    if(this.messageForm.value.message === "\n"){
      console.log("error");
      this.messageForm.reset();
    }else {
      this.onSendMessage();
    }
  }

  onSendMessage() {
      this.chatService.addMessage(new Message(this.messageForm.value.message!, this.username));
      this.messageForm.reset();
  }
}
