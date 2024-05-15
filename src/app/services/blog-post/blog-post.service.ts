import { Injectable } from '@angular/core';
import { BlogPost } from '../../core/blog-post.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {

  private url = 'http://localhost:3000/blogposts';
  reload = new Subject<void>();

  constructor(private http: HttpClient) {}

  getBlogPosts() {
    return this.http.get<BlogPost[]>(this.url);
  }

  addBlogPost(blogPost: BlogPost) {
    this.http
      .post(this.url, blogPost, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .subscribe(() => this.reload.next());
  }

  getBlogPostById(id: string) {
    const url = `${this.url}/${id}`;
    return this.http.get<BlogPost>(url);
  }
}
