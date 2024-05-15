import { Component, OnInit, inject } from '@angular/core';
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
export class SidebarComponent implements OnInit{
  userInput: string = "";
  filteredList: BlogPost[] = [];
  blogPostService : BlogPostService = inject(BlogPostService)
  
  ngOnInit(): void {
  
  }

  onEnter(){
    this.filterBlogPosts(this.userInput)
    this.userInput = "";
  }

  filterBlogPosts(string : string){
    this.blogPostService.getBlogPosts().subscribe(res => {
    this.filteredList = res.filter(x => x.content.toLocaleLowerCase().includes(string))
   })
   setTimeout(() => {
    console.log(this.filteredList.map(res => res))
   },500)
 }

 
}
