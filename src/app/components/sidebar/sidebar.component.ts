import { Component, EventEmitter, Output, inject } from '@angular/core';
import { BlogPostService } from '../../services/blog-post/blog-post.service';
import { FormsModule } from '@angular/forms';
import { BlogPost } from '../../core/blog-post.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent{
  userInput: string = "";
  filteredList: BlogPost[] = [];
  @Output() filterPosts = new EventEmitter<BlogPost[]>()
  blogPostService : BlogPostService = inject(BlogPostService)
  
  onEnter(){
    let word = this.userInput;

    this.blogPostService.getBlogPosts().subscribe(blogPosts => {
    this.filteredList = blogPosts.filter(post => post.content.toLocaleLowerCase().includes(word) || post.title.toLocaleLowerCase().includes(word));
    this.filterPosts.emit(this.filteredList)  
    })

    this.userInput = "";
  }
 
}
