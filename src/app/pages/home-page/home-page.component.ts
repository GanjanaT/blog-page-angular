import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
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

  @ViewChild('blogContainer') blogContainer! : ElementRef;
  blogPostService: BlogPostService = inject(BlogPostService);

  ngOnInit(): void {
    this.loadBlogPosts();
    this.blogPostService.reload.subscribe(() => {
      this.loadBlogPosts(); 
      setTimeout(() => {
      this.scrollToBottom()
    }, 200)});
  }

  loadBlogPosts() {
    this.blogPostService
      .getBlogPosts()
      .subscribe((blogPosts) => this.blogPosts = blogPosts);
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

  scrollToBottom(){
    this.blogContainer.nativeElement.scrollTop = this.blogContainer.nativeElement.scrollHeight;
  }
}
