import { Injectable } from '@angular/core';
import { BlogPost} from '../../core/blog-post.model';

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  url = 'http://localhost:3000/blogposts';
  blogPosts: BlogPost[] = [];

  constructor() {}

  getBlogPosts() {
    return this.blogPosts;
  }

  async loadBlogPosts() {
    const res = await fetch(this.url);
    this.blogPosts = await res.json();
  }

  async addBlogPost(blogPost: BlogPost){
    await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(blogPost),
      headers: {
        "Content-Type": "application/json"
      }
    })

    this.loadBlogPosts();
  }
}
