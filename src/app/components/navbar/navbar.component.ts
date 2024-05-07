import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarService } from '../../services/navbar/navbar.service';
import { INavLink } from '../../core/navlinks.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navbarService = inject(NavbarService);
  routes : INavLink[] = this.navbarService.getRoutes()
}
