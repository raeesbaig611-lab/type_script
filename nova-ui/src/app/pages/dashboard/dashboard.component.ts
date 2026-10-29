import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({ selector: 'app-dashboard', imports: [CurrencyPipe], templateUrl: './dashboard.component.html', styleUrl: './dashboard.component.scss' })
export class DashboardComponent {
  cards = [
    { icon: '💰', label: 'Revenue', value: '$48,290', delta: '+12.5%', up: true },
    { icon: '👥', label: 'Users', value: '3,482', delta: '+8.1%', up: true },
    { icon: '🛍️', label: 'Orders', value: '1,209', delta: '+3.4%', up: true },
    { icon: '↩️', label: 'Refunds', value: '24', delta: '-2.0%', up: false },
  ];
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  sales = [32, 45, 38, 60, 52, 75, 68, 85, 78, 92, 88, 100];
  split = [{ l: 'Audio', v: 38, c: '#6c5ce7' }, { l: 'Wearables', v: 27, c: '#00cec9' }, { l: 'Computers', v: 22, c: '#fd79a8' }, { l: 'Photo', v: 13, c: '#fdcb6e' }];
  orders = [
    { id: '#1042', customer: 'Sara Khan', total: 129, status: 'Delivered' },
    { id: '#1041', customer: 'Ali Raza', total: 549, status: 'Shipped' },
    { id: '#1040', customer: 'Hina Malik', total: 89, status: 'Pending' },
    { id: '#1039', customer: 'Usman Tariq', total: 1299, status: 'Delivered' },
    { id: '#1038', customer: 'Ayesha Noor', total: 59, status: 'Cancelled' },
  ];
  donut() {
    let acc = 0;
    return 'conic-gradient(' + this.split.map(s => { const a = acc; acc += s.v; return `${s.c} ${a}% ${acc}%`; }).join(',') + ')';
  }
}
