import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  dark = signal(false);
  menu = signal(false);
  links = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/contact', label: 'Contact' },
  ];
  constructor(public cart: CartService) {
    const saved = localStorage.getItem('theme');
    this.apply(saved ? saved === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches);
  }
  toggle() { this.apply(!this.dark()); }
  private apply(d: boolean) {
    this.dark.set(d);
    document.documentElement.dataset['theme'] = d ? 'dark' : 'light';
    localStorage.setItem('theme', d ? 'dark' : 'light');
  }
}
