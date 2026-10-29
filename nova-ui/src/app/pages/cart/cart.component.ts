import { Component, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({ selector: 'app-cart', imports: [CurrencyPipe, RouterLink], templateUrl: './cart.component.html', styleUrl: './cart.component.scss' })
export class CartComponent {
  coupon = signal('');
  applied = signal(false);
  constructor(public cart: CartService) {}
  apply() { this.applied.set(this.coupon().trim().toUpperCase() === 'NOVA10'); this.cart.notify(this.applied() ? 'Coupon applied: 10% off' : 'Invalid coupon code'); }
  discount() { return this.applied() ? this.cart.subtotal() * 0.1 : 0; }
  total() { return this.cart.total() - this.discount(); }
}
