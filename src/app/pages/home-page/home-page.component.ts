import { Component, OnInit, inject } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { BlogFormComponent } from './components/blog-form/blog-form.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { BlogPostService } from '../../services/blog-post/blog-post.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SidebarComponent, BlogFormComponent, BlogPostComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  blogPostService : BlogPostService = inject(BlogPostService);

  get blogPosts() {
    return this.blogPostService.getBlogPosts();
  }

  ngOnInit(): void {
    this.blogPostService.loadBlogPosts();
  }
}
