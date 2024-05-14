import { Component, inject } from '@angular/core';
import { CommentComponent } from '../comment/comment.component';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from '../../../../services/comments/comments.service';
import { Comments } from '../../../../core/comment.model';
import { Subscription, interval, timer } from 'rxjs';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommentComponent],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css',
})
export class CommentsComponent {
  comments: Comments = new Comments('', []);

  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  commentsService: CommentsService = inject(CommentsService);

  commentsSubscription: Subscription = new Subscription();

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.commentsSubscription = timer(0, 5000).subscribe(() =>  this.updateComments(id));
  }

  ngOnDestroy(): void {
    this.commentsSubscription.unsubscribe();
  }

  updateComments(id: string) {
    this.commentsService
      .getUserComments(id)
      .subscribe((comments) => (this.comments = comments));
  }
}
