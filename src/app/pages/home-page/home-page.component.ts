import { Component, OnInit, inject } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { BlogFormComponent } from './components/blog-form/blog-form.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { BlogPostService } from '../../services/blog-post/blog-post.service';
import { BlogPost } from '../../core/blog-post.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SidebarComponent, BlogFormComponent, BlogPostComponent, RouterLink, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  blogPosts: BlogPost[] = [];
  blogPostsExists : boolean = true;
  counter : number = 0;
  blogPostService: BlogPostService = inject(BlogPostService);

  ngOnInit(): void {
    this.loadBlogPosts();
    this.blogPostService.reload.subscribe(() => this.loadBlogPosts());
  }

  loadBlogPosts() {
    this.blogPostService
      .getBlogPosts()
      .subscribe((blogPosts) => this.blogPosts = blogPosts.sort((a,b) => +new Date(a.date) - +new Date(b.date)).reverse());
  }

  onFilterBlogPosts(blogPosts : BlogPost[]){
    if(blogPosts.length === 0){
      this.blogPostsExists = false;
    } else {
      this.blogPosts = blogPosts;
      this.blogPostsExists = true;
    }
  }

  onReturn(){
    this.blogPostsExists = true;
    this.loadBlogPosts()
  }
}
