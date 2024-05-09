import { Component, Input } from '@angular/core';
import { BlogPost } from '../../../../core/blog-post.model';

@Component({
  selector: 'app-blogpost',
  standalone: true,
  imports: [],
  templateUrl: './blogpost.component.html',
  styleUrl: './blogpost.component.css'
})
export class BlogpostComponent {
  @Input() blogPost : BlogPost = new BlogPost("","","","");

}
