import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', title: 'Nova — Home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'products', title: 'Nova — Products', loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent) },
  { path: 'dashboard', title: 'Nova — Dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: 'contact', title: 'Nova — Contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
  { path: '**', redirectTo: '' },
];
