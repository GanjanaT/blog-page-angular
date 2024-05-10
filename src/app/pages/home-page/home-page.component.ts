import { Component, OnInit, inject } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { BlogFormComponent } from './components/blog-form/blog-form.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { BlogPostService } from '../../services/blog-post/blog-post.service';
import { BlogPost } from '../../core/blog-post.model';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SidebarComponent, BlogFormComponent, BlogPostComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  blogPosts : BlogPost[] = [];
  blogPostService : BlogPostService = inject(BlogPostService);

  // get blogPosts() {
  //   return this.blogPostService.getBlogPosts();
  // }

  ngOnInit(): void {
    this.updateBlogPosts();
    this.blogPostService.reload.subscribe(() => this.updateBlogPosts());
  }

  async updateBlogPosts() {
    // this.blogPostService.getBlogPosts().then(blogPosts => {
    //   this.blogPosts = blogPosts
    // })
     (await this.blogPostService.getBlogPosts()).subscribe(blogPosts => {
      this.blogPosts = blogPosts
    })
  }
}
