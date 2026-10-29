import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({ selector: 'app-admin-settings', imports: [FormsModule], templateUrl: './admin-settings.component.html', styleUrl: '../products/admin-products.component.scss' })
export class AdminSettingsComponent {
  saved = signal(false);
  s = { store: 'Nova', email: 'hello@nova.dev', phone: '+92 300 1234567', currency: 'USD', emailNotif: true, orderAlerts: true, maintenance: false };
  save() { this.saved.set(true); setTimeout(() => this.saved.set(false), 2000); }
}
