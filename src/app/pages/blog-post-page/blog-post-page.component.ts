import { Component, OnInit, inject } from '@angular/core';
import { BlogPost } from '../../core/blog-post.model';
import { ActivatedRoute } from '@angular/router';
import { BlogPostService } from '../../services/blog-post/blog-post.service';

@Component({
  selector: 'app-blog-post-page',
  standalone: true,
  imports: [],
  templateUrl: './blog-post-page.component.html',
  styleUrl: './blog-post-page.component.css',
})
export class BlogPostPageComponent implements OnInit {
  blogPost: BlogPost = new BlogPost('', '', '', '');
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  blogPostService: BlogPostService = inject(BlogPostService);

  ngOnInit(): void {
    const id: string = this.activatedRoute.snapshot.params['id'];
    this.blogPostService
      .getBlogPostById(id)
      .subscribe((res) => (this.blogPost = res));
  }
}
