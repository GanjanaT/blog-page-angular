import { Injectable } from '@angular/core';
import { BlogPost} from '../../core/blog-post.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  // blogPosts : BlogPost[] = [];
  url = 'http://localhost:3000/blogposts';
  reload = new Subject<void>();

  constructor(private http: HttpClient) {}

  async getBlogPosts() {
    const res = await fetch(this.url);
    return await res.json();
  }

  // updateBlogPosts() {
  //   this.getBlogPosts().then(blogPosts => {
  //     this.blogPosts = blogPosts
  //   })
  // }

  async addBlogPost(blogPost: BlogPost){
    this.http.post(this.url, blogPost, {
      headers: {
        "Content-Type" : "application/json"
      }
    }).subscribe(() => this.reload.next())
  }
}
