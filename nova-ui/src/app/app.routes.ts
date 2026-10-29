import { inject } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';

const adminGuard = () => (inject(AuthService).isAdmin() ? true : inject(Router).createUrlTree(['/login']));

export const routes: Routes = [
  { path: '', title: 'Nova — Home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'products', title: 'Nova — Products', loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent) },
  { path: 'products/:id', title: 'Nova — Product', loadComponent: () => import('./pages/product-detail/product-detail.component').then(m => m.ProductDetailComponent) },
  { path: 'cart', title: 'Nova — Cart', loadComponent: () => import('./pages/cart/cart.component').then(m => m.CartComponent) },
  { path: 'checkout', title: 'Nova — Checkout', loadComponent: () => import('./pages/checkout/checkout.component').then(m => m.CheckoutComponent) },
  { path: 'login', title: 'Nova — Login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  { path: 'register', title: 'Nova — Sign up', loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent) },
  { path: 'dashboard', title: 'Nova — Dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: 'about', title: 'Nova — About', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
  { path: 'contact', title: 'Nova — Contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
  {
    path: 'admin', canActivate: [adminGuard], loadComponent: () => import('./pages/admin/layout/admin-layout.component').then(m => m.AdminLayoutComponent),
    children: [
      { path: '', title: 'Admin — Dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) },
      { path: 'products', title: 'Admin — Products', loadComponent: () => import('./pages/admin/products/admin-products.component').then(m => m.AdminProductsComponent) },
      { path: 'orders', title: 'Admin — Orders', loadComponent: () => import('./pages/admin/orders/admin-orders.component').then(m => m.AdminOrdersComponent) },
      { path: 'customers', title: 'Admin — Customers', loadComponent: () => import('./pages/admin/customers/admin-customers.component').then(m => m.AdminCustomersComponent) },
      { path: 'settings', title: 'Admin — Settings', loadComponent: () => import('./pages/admin/settings/admin-settings.component').then(m => m.AdminSettingsComponent) },
    ],
  },
  { path: '**', title: 'Nova — Not found', loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent) },
];
