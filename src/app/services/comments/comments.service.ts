import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment, Comments, IComments } from '../../core/comment.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private url = 'http://localhost:3000/comments';
  reload = new Subject<void>();

  constructor(private http: HttpClient) {}

  getUserComments(id: string) {
    return this.http.get<Comments>(`${this.url}/${id}`);
  }

  addComment(id: string, comment: Comment) {
    this.getUserComments(id).subscribe((res) => {
      let comments: IComments = res;
      comments.pageComments.push(comment);

      this.http.put(`${this.url}/${id}`, comments, {
        headers: { 'Content-Type': 'application/json' },
      }).subscribe(() => this.reload.next())
    })
  }
}
