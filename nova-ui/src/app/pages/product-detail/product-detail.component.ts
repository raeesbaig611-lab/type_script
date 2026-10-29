import { Component, computed, input, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { PRODUCTS } from '../../services/data';

@Component({ selector: 'app-product-detail', imports: [CurrencyPipe, RouterLink], templateUrl: './product-detail.component.html', styleUrl: './product-detail.component.scss' })
export class ProductDetailComponent {
  id = input<string>();
  product = computed(() => PRODUCTS.find(p => p.id === Number(this.id())));
  related = computed(() => PRODUCTS.filter(p => p.category === this.product()?.category && p.id !== this.product()?.id).slice(0, 3));
  qty = signal(1);
  reviews = [
    { n: 'Sara Khan', t: 'Excellent quality, exactly as described. Highly recommended!', r: 5 },
    { n: 'Ali Raza', t: 'Fast delivery and great packaging. Worth every penny.', r: 4 },
    { n: 'Hina Malik', t: 'Looks amazing and works perfectly. Will buy again.', r: 5 },
  ];
  constructor(private cart: CartService, private router: Router) {}
  inc() { this.qty.update(q => q + 1); }
  dec() { this.qty.update(q => Math.max(1, q - 1)); }
  add() { this.cart.add(this.product()!, this.qty(), true); }
  buyNow() { this.cart.add(this.product()!, this.qty()); this.router.navigate(['/checkout']); }
  stars(r: number) { return '★'.repeat(Math.round(r)) + '☆'.repeat(5 - Math.round(r)); }
}
