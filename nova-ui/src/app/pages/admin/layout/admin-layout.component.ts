import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({ selector: 'app-admin-layout', imports: [RouterOutlet, RouterLink, RouterLinkActive], templateUrl: './admin-layout.component.html', styleUrl: './admin-layout.component.scss' })
export class AdminLayoutComponent {
  private auth = inject(AuthService);
  private router = inject(Router);
  open = signal(false);
  nav = [
    { p: '/admin', i: '📊', l: 'Dashboard', exact: true },
    { p: '/admin/products', i: '📦', l: 'Products', exact: false },
    { p: '/admin/orders', i: '🧾', l: 'Orders', exact: false },
    { p: '/admin/customers', i: '👥', l: 'Customers', exact: false },
    { p: '/admin/settings', i: '⚙️', l: 'Settings', exact: false },
  ];
  logout() { this.auth.logout(); this.router.navigate(['/login']); }
}
