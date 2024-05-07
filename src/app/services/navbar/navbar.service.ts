import { Injectable } from '@angular/core';
import { INavLink } from '../../core/navlinks.model';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private routes: INavLink[] = [
    { path: '', url: '/assets/home.png', title: 'Home' },
    { path: '/account', url: '/assets/account.png', title: 'Account' },
    { path: '/chat', url: '/assets/chat.png', title: 'Chat' },
  ];
  constructor() {}

  getRoutes() {
    return this.routes;
  }
}
