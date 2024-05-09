import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavLinkService } from '../../services/nav-link/nav-link.service';
import { INavLink } from '../../core/nav-link.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navLinkService = inject(NavLinkService);
  routes : INavLink[] = this.navLinkService.getRoutes()
}
