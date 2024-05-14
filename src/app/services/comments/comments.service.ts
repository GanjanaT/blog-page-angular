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

  getCommentsList() {
    return this.http.get<Comments[]>(`${this.url}`);
  }

  getUserComments(id: string) {
    return this.http.get<Comments>(`${this.url}/${id}`);
  }

  addComment(id: string, comment: Comment) {
    this.getCommentsList().subscribe((res) => {
      let commentsList: Comments[];
      let checkId: boolean = false;

      commentsList = res;

      commentsList.find((res) =>
        res.id === id ? (checkId = true) : (checkId = false)
      );

      if (checkId) {
        this.getUserComments(id).subscribe((res) => {
          let comments: IComments = res;
          comments.pageComments.push(comment);

          this.http
            .put(`${this.url}/${id}`, comments, {
              headers: { 'Content-Type': 'application/json' },
            })
            .subscribe(() => this.reload.next());
        });
      } else {
        commentsList.push({ id: id, pageComments: [comment] });
        this.http
          .post(this.url, new Comments(id, [comment]))
          .subscribe(() => this.reload.next());
      }
    });
  }
}
