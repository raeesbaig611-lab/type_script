import { Component, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CurrencyPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  dark = signal(false);
  menu = signal(false);
  subscribed = signal(false);
  links = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];
  constructor(public cart: CartService) {
    let saved: string | null = null;
    try { saved = localStorage.getItem('theme'); } catch {}
    this.apply(saved ? saved === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches);
  }
  toggle() { this.apply(!this.dark()); }
  private apply(d: boolean) {
    this.dark.set(d);
    document.documentElement.dataset['theme'] = d ? 'dark' : 'light';
    try { localStorage.setItem('theme', d ? 'dark' : 'light'); } catch {}
  }
}
