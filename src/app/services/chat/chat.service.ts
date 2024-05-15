import { Injectable } from '@angular/core';
import { Subject, Subscription, retry, switchMap, timer } from 'rxjs';
import { Message } from '../../core/message.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  url = 'http://localhost:3000/chat';
  username: string = '';
  reload = new Subject<void>();

  constructor(private http: HttpClient) {}

  setUsername(username: string) {
    this.username = username;
  }

  getUsername() {
    return this.username;
  }

  getMessages() {
    return this.http.get<Message[]>(this.url);
  }

  addMessage(message: Message) {
    this.http
      .post(`${this.url}`, message, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .subscribe(() => this.reload.next());
  }
}
