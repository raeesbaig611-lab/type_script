import { Component, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({ selector: 'app-cart', imports: [CurrencyPipe, RouterLink], templateUrl: './cart.component.html', styleUrl: './cart.component.scss' })
export class CartComponent {
  coupon = signal('');
  constructor(public cart: CartService) {}
  apply() { this.cart.applyCoupon(this.coupon()); }
}
