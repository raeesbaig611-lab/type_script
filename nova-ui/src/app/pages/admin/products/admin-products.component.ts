import { Component, computed, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PRODUCTS, Product } from '../../../services/data';

@Component({ selector: 'app-admin-products', imports: [CurrencyPipe, ReactiveFormsModule], templateUrl: './admin-products.component.html', styleUrl: './admin-products.component.scss' })
export class AdminProductsComponent {
  private fb = inject(FormBuilder);
  products = signal<Product[]>([...PRODUCTS]);
  query = signal('');
  modal = signal(false);
  editing = signal<Product | null>(null);
  confirm = signal<Product | null>(null);
  toast = signal('');
  categories = ['Audio', 'Wearables', 'Computers', 'Photo', 'Home'];
  list = computed(() => this.products().filter(p => p.name.toLowerCase().includes(this.query().toLowerCase())));

  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    category: ['Audio', Validators.required],
    price: [0, [Validators.required, Validators.min(1)]],
    stock: [10, [Validators.required, Validators.min(0)]],
    emoji: ['📦', Validators.required],
    description: ['', [Validators.required, Validators.minLength(10)]],
  });
  bad(c: 'name' | 'price' | 'description') { const x = this.form.controls[c]; return x.invalid && (x.touched || x.dirty); }

  openAdd() { this.editing.set(null); this.form.reset({ name: '', category: 'Audio', price: 0, stock: 10, emoji: '📦', description: '' }); this.modal.set(true); }
  openEdit(p: Product) { this.editing.set(p); this.form.reset({ name: p.name, category: p.category, price: p.price, stock: 10, emoji: p.emoji, description: p.description }); this.modal.set(true); }
  save() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    const v = this.form.getRawValue(); const e = this.editing();
    if (e) { this.products.update(l => l.map(p => (p.id === e.id ? { ...p, ...v } : p))); this.notify('Product updated'); }
    else { this.products.update(l => [{ id: Date.now(), rating: 4.5, reviews: 0, color: '#6c5ce7', features: [], ...v }, ...l]); this.notify('Product added'); }
    this.modal.set(false);
  }
  remove() { const p = this.confirm(); if (!p) return; this.products.update(l => l.filter(x => x.id !== p.id)); this.confirm.set(null); this.notify('Product deleted'); }
  notify(m: string) { this.toast.set(m); setTimeout(() => this.toast.set(''), 1800); }
}
