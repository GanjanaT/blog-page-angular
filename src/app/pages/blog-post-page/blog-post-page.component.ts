import { Component, OnInit, inject } from '@angular/core';
import { BlogPost } from '../../core/blog-post.model';
import { ActivatedRoute } from '@angular/router';
import { BlogPostService } from '../../services/blog-post/blog-post.service';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentsFormComponent } from './components/comments-form/comments-form.component';
import { CommentsService } from '../../services/comments/comments.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-post-page',
  standalone: true,
  imports: [SidebarComponent, CommentsComponent, CommentsFormComponent, CommonModule],
  templateUrl: './blog-post-page.component.html',
  styleUrl: './blog-post-page.component.css',
})
export class BlogPostPageComponent implements OnInit {
  blogPost: BlogPost = new BlogPost('', '', '', '');
  id: string = "";
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  blogPostService: BlogPostService = inject(BlogPostService);
  commentsService: CommentsService = inject(CommentsService);

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.blogPostService
      .getBlogPostById(this.id)
      .subscribe((res) => (this.blogPost = res));
  }
}
