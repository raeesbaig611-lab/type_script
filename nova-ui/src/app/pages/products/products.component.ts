import { Component, computed, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { PRODUCTS, Product } from '../../services/data';

@Component({ selector: 'app-products', imports: [CurrencyPipe, RouterLink], templateUrl: './products.component.html', styleUrl: './products.component.scss' })
export class ProductsComponent {
  all = PRODUCTS;
  categories = ['All', ...new Set(PRODUCTS.map(p => p.category))];
  query = signal('');
  category = signal('All');
  sort = signal('featured');
  maxPrice = signal(1500);

  list = computed(() => {
    const q = this.query().toLowerCase();
    let r = this.all.filter(p => (this.category() === 'All' || p.category === this.category()) && p.name.toLowerCase().includes(q) && p.price <= this.maxPrice());
    const s = this.sort();
    if (s === 'low') r = [...r].sort((a, b) => a.price - b.price);
    if (s === 'high') r = [...r].sort((a, b) => b.price - a.price);
    if (s === 'rating') r = [...r].sort((a, b) => b.rating - a.rating);
    return r;
  });

  constructor(public cart: CartService) {}
  add(p: Product) { this.cart.add(p); }
  stars(r: number) { return '★'.repeat(Math.round(r)) + '☆'.repeat(5 - Math.round(r)); }
  reset() { this.query.set(''); this.category.set('All'); this.maxPrice.set(1500); this.sort.set('featured'); }
}
