import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment, Comments, IComments } from '../../core/comment.model';
import { Subject, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private url = 'http://localhost:3000/comments';
  reload = new Subject<void>();

  constructor(private http: HttpClient) {}
  
  getUserComments(id: string) {
    return this.http.get<Comments>(`${this.url}/${id}`);
    ;
  }
}
