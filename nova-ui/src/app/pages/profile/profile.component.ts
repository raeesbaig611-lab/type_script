import { Component, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({ selector: 'app-profile', imports: [FormsModule, CurrencyPipe, RouterLink], templateUrl: './profile.component.html', styleUrl: './profile.component.scss' })
export class ProfileComponent {
  auth = inject(AuthService);
  private router = inject(Router);
  saved = signal(false);
  name = this.auth.user()?.name ?? '';
  email = this.auth.user()?.email ?? '';
  phone = '+92 300 1234567';
  city = 'Lahore';
  orders = [
    { id: '#NV-482913', date: '2026-10-20', total: 129, status: 'Delivered', items: '🎧 Aero Headphones' },
    { id: '#NV-471002', date: '2026-09-02', total: 258, status: 'Shipped', items: '🔊 Echo Speaker ×2' },
    { id: '#NV-455120', date: '2026-07-14', total: 59, status: 'Delivered', items: '💪 Fit Band' },
  ];
  save() { this.saved.set(true); setTimeout(() => this.saved.set(false), 2000); }
  logout() { this.auth.logout(); this.router.navigate(['/']); }
}
