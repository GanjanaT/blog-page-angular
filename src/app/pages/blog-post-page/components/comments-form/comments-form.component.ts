import { Component, Input, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Comment } from '../../../../core/comment.model';
import { CommentsService } from '../../../../services/comments/comments.service';

@Component({
  selector: 'app-comments-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './comments-form.component.html',
  styleUrl: './comments-form.component.css',
})
export class CommentsFormComponent {
  formBuilder: FormBuilder;
  commentForm;
  commentsService: CommentsService = inject(CommentsService);
  @Input() id : string = "";

  constructor(formBuilder: FormBuilder){
    this.formBuilder = formBuilder;
    this.commentForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      comment: ["", [Validators.required]]
    })
  }

  onSubmit(){
    this.commentsService.addComment(this.id, new Comment(this.commentForm.value.name!, this.commentForm.value.comment!));
    this.commentForm.reset()
    alert("Comment was sucsefully sent!")
  }
}
