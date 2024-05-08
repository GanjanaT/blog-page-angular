import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

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
  
  constructor(formBuilder: FormBuilder){
    this.formBuilder = formBuilder;
    this.blogpostForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]]
    })
  }

  onSubmit(){
    console.log(this.blogpostForm.value);
    
  }
}
