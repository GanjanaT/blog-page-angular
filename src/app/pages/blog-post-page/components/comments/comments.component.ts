import { Component, inject} from '@angular/core';
import { CommentComponent } from '../comment/comment.component';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from '../../../../services/comments/comments.service';
import { Comments } from '../../../../core/comment.model';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommentComponent],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {
  comments: Comments = new Comments("",[]);

  activatedRoute: ActivatedRoute = inject(ActivatedRoute)
  commentsService : CommentsService = inject(CommentsService);

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.updateComments(id)
    this.commentsService.reload.subscribe(() => this.updateComments(id))
      // c.pageComments.forEach(element => this.hej.push(element))
  }

  updateComments(id: string){
    this.commentsService
      .getUserComments(id)
      .subscribe((comments) => this.comments = comments);
  }
  
}
