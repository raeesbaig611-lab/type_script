import { Injectable, computed, effect, signal } from '@angular/core';
import { Product } from './data';

export interface CartItem { product: Product; qty: number; }

@Injectable({ providedIn: 'root' })
export class CartService {
  readonly items = signal<CartItem[]>(this.load());
  readonly drawer = signal(false);
  readonly toast = signal('');
  readonly couponApplied = signal(false);

  readonly count = computed(() => this.items().reduce((s, i) => s + i.qty, 0));
  readonly subtotal = computed(() => this.items().reduce((s, i) => s + i.qty * i.product.price, 0));
  readonly shipping = computed(() => (this.subtotal() === 0 || this.subtotal() >= 500 ? 0 : 15));
  readonly tax = computed(() => Math.round(this.subtotal() * 0.08 * 100) / 100);
  readonly discount = computed(() => (this.couponApplied() ? Math.round(this.subtotal() * 0.1 * 100) / 100 : 0));
  readonly total = computed(() => this.subtotal() + this.shipping() + this.tax() - this.discount());

  constructor() {
    effect(() => { try { localStorage.setItem('cart', JSON.stringify(this.items())); } catch {} });
  }

  add(p: Product, qty = 1, open = false) {
    this.items.update(list => {
      const found = list.find(i => i.product.id === p.id);
      return found ? list.map(i => (i === found ? { ...i, qty: i.qty + qty } : i)) : [...list, { product: p, qty }];
    });
    this.notify(`${p.name} added to cart`);
    if (open) this.drawer.set(true);
  }
  setQty(id: number, qty: number) {
    this.items.update(list => list.map(i => (i.product.id === id ? { ...i, qty: Math.max(1, qty) } : i)));
  }
  remove(id: number) { this.items.update(list => list.filter(i => i.product.id !== id)); }
  clear() { this.items.set([]); this.couponApplied.set(false); }
  applyCoupon(code: string) { const ok = code.trim().toUpperCase() === 'NOVA10'; this.couponApplied.set(ok); this.notify(ok ? 'Coupon applied: 10% off' : 'Invalid coupon code'); return ok; }
  notify(msg: string) { this.toast.set(msg); setTimeout(() => this.toast.set(''), 1800); }

  private load(): CartItem[] {
    try { return JSON.parse(localStorage.getItem('cart') || '[]'); } catch { return []; }
  }
}
