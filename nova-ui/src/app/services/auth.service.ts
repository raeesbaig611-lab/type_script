import { Injectable, signal } from '@angular/core';

export const ADMIN_EMAIL = 'admin@nova.com';
export const ADMIN_PASSWORD = 'admin123';

export interface User { name: string; email: string; }

@Injectable({ providedIn: 'root' })
export class AuthService {
  readonly isAdmin = signal(this.read('admin') === '1');
  readonly user = signal<User | null>(this.readUser());

  /** Returns 'admin' for admin credentials, otherwise 'user' (any valid email/password works in this demo). */
  login(email: string, password: string, name?: string): 'admin' | 'user' {
    const clean = email.trim().toLowerCase();
    if (clean === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      this.isAdmin.set(true); this.write('admin', '1');
      this.setUser({ name: 'Admin', email: clean });
      return 'admin';
    }
    this.isAdmin.set(false); this.write('admin', null);
    this.setUser({ name: name || this.nameFrom(clean), email: clean });
    return 'user';
  }
  logout() { this.isAdmin.set(false); this.write('admin', null); this.setUser(null); }

  private setUser(u: User | null) {
    this.user.set(u);
    try { u ? localStorage.setItem('user', JSON.stringify(u)) : localStorage.removeItem('user'); } catch {}
  }
  private nameFrom(email: string) {
    const n = email.split('@')[0].replace(/[._-]+/g, ' ');
    return n.replace(/\b\w/g, c => c.toUpperCase());
  }
  private read(k: string) { try { return sessionStorage.getItem(k); } catch { return null; } }
  private write(k: string, v: string | null) { try { v === null ? sessionStorage.removeItem(k) : sessionStorage.setItem(k, v); } catch {} }
  private readUser(): User | null { try { return JSON.parse(localStorage.getItem('user') || 'null'); } catch { return null; } }
}
