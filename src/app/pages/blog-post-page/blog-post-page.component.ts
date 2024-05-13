import { Component, OnInit, inject } from '@angular/core';
import { BlogPost } from '../../core/blog-post.model';
import { ActivatedRoute } from '@angular/router';
import { BlogPostService } from '../../services/blog-post/blog-post.service';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentsFormComponent } from './components/comments-form/comments-form.component';
import { CommentsService } from '../../services/comments/comments.service';
import { Comment, Comments, IComments } from '../../core/comment.model';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-blog-post-page',
  standalone: true,
  imports: [SidebarComponent, CommentsComponent, CommentsFormComponent],
  templateUrl: './blog-post-page.component.html',
  styleUrl: './blog-post-page.component.css',
})
export class BlogPostPageComponent implements OnInit {
  blogPost: BlogPost = new BlogPost('', '', '', '');
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  blogPostService: BlogPostService = inject(BlogPostService);
  commentsService: CommentsService = inject(CommentsService);

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.blogPostService
      .getBlogPostById(id)
      .subscribe((res) => (this.blogPost = res));
  }
}