import { Routes } from '@angular/router';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { BlogPostPageComponent } from './pages/blog-post-page/blog-post-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'chat',
        component: ChatPageComponent
    },
    {
        path: 'blog-post-page/:id',
        component: BlogPostPageComponent
    },
    {
        path: '**',
        component: NotFoundPageComponent
    }
];
