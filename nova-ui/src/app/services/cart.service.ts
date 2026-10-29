import { Injectable, computed, signal } from '@angular/core';

export interface Product { id: number; name: string; category: string; price: number; rating: number; emoji: string; color: string; }

@Injectable({ providedIn: 'root' })
export class CartService {
  private items = signal<Product[]>([]);
  readonly count = computed(() => this.items().length);
  readonly total = computed(() => this.items().reduce((s, p) => s + p.price, 0));
  add(p: Product) { this.items.update(i => [...i, p]); }
}
