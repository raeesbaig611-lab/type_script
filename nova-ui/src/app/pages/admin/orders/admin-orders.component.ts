import { Component, computed, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ORDERS, Order } from '../../../services/data';

@Component({ selector: 'app-admin-orders', imports: [CurrencyPipe], templateUrl: './admin-orders.component.html', styleUrl: '../products/admin-products.component.scss' })
export class AdminOrdersComponent {
  orders = signal<Order[]>([...ORDERS]);
  filter = signal('All');
  statuses = ['All', 'Pending', 'Shipped', 'Delivered', 'Cancelled'];
  list = computed(() => this.orders().filter(o => this.filter() === 'All' || o.status === this.filter()));
  count(s: string) { return s === 'All' ? this.orders().length : this.orders().filter(o => o.status === s).length; }
  setStatus(id: string, s: string) { this.orders.update(l => l.map(o => (o.id === id ? { ...o, status: s as Order['status'] } : o))); }
}
