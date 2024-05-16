import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlogPostService } from '../../../../services/blog-post/blog-post.service';
import { BlogPost } from '../../../../core/blog-post.model';

@Component({
  selector: 'app-blog-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.css'
})
export class BlogFormComponent {
  formBuilder: FormBuilder;
  blogpostForm;
  blogPostService: BlogPostService = inject(BlogPostService);
  
  constructor(formBuilder: FormBuilder){
    this.formBuilder = formBuilder;
    this.blogpostForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  get formField(){
    return this.blogpostForm.controls
  }

  onSubmit(){
      let blogPost = new BlogPost(this.blogpostForm.value.title!, this.blogpostForm.value.content!, this.blogpostForm.value.name!, this.blogpostForm.value.email!);
      this.blogPostService.addBlogPost(blogPost);
      this.blogpostForm.reset();
      alert('your blog post was succesfully published')
  }
}
