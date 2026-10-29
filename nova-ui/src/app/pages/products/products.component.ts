import { Component, computed, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CartService, Product } from '../../services/cart.service';

@Component({ selector: 'app-products', imports: [CurrencyPipe], templateUrl: './products.component.html', styleUrl: './products.component.scss' })
export class ProductsComponent {
  all: Product[] = [
    { id: 1, name: 'Aero Headphones', category: 'Audio', price: 129, rating: 4.8, emoji: '🎧', color: '#6c5ce7' },
    { id: 2, name: 'Pulse Smartwatch', category: 'Wearables', price: 199, rating: 4.6, emoji: '⌚', color: '#00cec9' },
    { id: 3, name: 'Vision Camera', category: 'Photo', price: 549, rating: 4.9, emoji: '📷', color: '#fd79a8' },
    { id: 4, name: 'Echo Speaker', category: 'Audio', price: 89, rating: 4.4, emoji: '🔊', color: '#fdcb6e' },
    { id: 5, name: 'Nimbus Laptop', category: 'Computers', price: 1299, rating: 4.7, emoji: '💻', color: '#0984e3' },
    { id: 6, name: 'Flow Keyboard', category: 'Computers', price: 99, rating: 4.5, emoji: '⌨️', color: '#e17055' },
    { id: 7, name: 'Orbit Drone', category: 'Photo', price: 699, rating: 4.3, emoji: '🛸', color: '#55efc4' },
    { id: 8, name: 'Fit Band', category: 'Wearables', price: 59, rating: 4.2, emoji: '💪', color: '#a29bfe' },
  ];
  categories = ['All', ...new Set(this.all.map(p => p.category))];
  query = signal('');
  category = signal('All');
  sort = signal('featured');
  toast = signal('');

  list = computed(() => {
    const q = this.query().toLowerCase();
    let r = this.all.filter(p => (this.category() === 'All' || p.category === this.category()) && p.name.toLowerCase().includes(q));
    const s = this.sort();
    if (s === 'low') r = [...r].sort((a, b) => a.price - b.price);
    if (s === 'high') r = [...r].sort((a, b) => b.price - a.price);
    if (s === 'rating') r = [...r].sort((a, b) => b.rating - a.rating);
    return r;
  });

  constructor(private cart: CartService) {}

  add(p: Product) {
    this.cart.add(p);
    this.toast.set(`${p.name} added to cart`);
    setTimeout(() => this.toast.set(''), 1800);
  }
  stars(r: number) { return '★'.repeat(Math.round(r)) + '☆'.repeat(5 - Math.round(r)); }
}
