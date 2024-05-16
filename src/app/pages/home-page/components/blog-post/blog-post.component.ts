import { Component, Input,} from '@angular/core';
import { BlogPost } from '../../../../core/blog-post.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {
  @Input() blogPost : BlogPost = new BlogPost("","","","");
}
