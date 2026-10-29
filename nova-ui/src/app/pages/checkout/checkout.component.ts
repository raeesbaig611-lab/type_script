import { Component, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({ selector: 'app-checkout', imports: [CurrencyPipe, ReactiveFormsModule, RouterLink], templateUrl: './checkout.component.html', styleUrl: './checkout.component.scss' })
export class CheckoutComponent {
  cart = inject(CartService);
  private fb = inject(FormBuilder);
  done = signal(false);
  orderNo = 'NV-' + Math.floor(100000 + Math.random() * 900000);
  paidTotal = 0;

  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9+\-\s]{9,15}$/)]],
    address: ['', Validators.required],
    city: ['', Validators.required],
    zip: ['', [Validators.required, Validators.pattern(/^[0-9]{4,6}$/)]],
    payment: ['card'],
    cardName: [''],
    cardNumber: [''],
    expiry: [''],
    cvv: [''],
  });

  get card() { return this.form.controls.payment.value === 'card'; }
  bad(c: keyof typeof this.form.controls) { const x = this.form.controls[c]; return x.invalid && (x.touched || x.dirty); }
  cardBad(c: 'cardName' | 'cardNumber' | 'expiry' | 'cvv') {
    const v = this.form.controls[c];
    const rules = { cardName: /.{3,}/, cardNumber: /^[0-9 ]{13,19}$/, expiry: /^(0[1-9]|1[0-2])\/[0-9]{2}$/, cvv: /^[0-9]{3,4}$/ };
    return this.card && (v.touched || v.dirty) && !rules[c].test(v.value);
  }
  place() {
    this.form.markAllAsTouched();
    const cardOk = !this.card || (['cardName', 'cardNumber', 'expiry', 'cvv'] as const).every(c => !this.cardBad(c) && this.form.controls[c].value);
    if (this.form.invalid || !cardOk) return;
    this.paidTotal = this.cart.total();
    this.done.set(true);
    this.cart.clear();
  }
}
