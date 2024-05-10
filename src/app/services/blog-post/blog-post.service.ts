import { Injectable } from '@angular/core';
import { BlogPost} from '../../core/blog-post.model';
import { Observable, Subject} from 'rxjs';
import { map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  // blogPosts : BlogPost[] = [];
  private url = 'http://localhost:3000/blogposts';
  reload = new Subject<void>();

  constructor(private http: HttpClient) {}

  async getBlogPosts(){
     return this.http.get<BlogPost[]>(this.url)
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

 getBlogPostById(id : string){
  const url = `${this.url}/${id}`
  return this.http.get<BlogPost>(url)
  }
}
