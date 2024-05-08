import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { BlogFormComponent } from './components/blog-form/blog-form.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SidebarComponent, BlogFormComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
