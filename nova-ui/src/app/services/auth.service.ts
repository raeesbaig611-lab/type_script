import { Injectable, signal } from '@angular/core';

export const ADMIN_EMAIL = 'admin@nova.com';
export const ADMIN_PASSWORD = 'admin123';

@Injectable({ providedIn: 'root' })
export class AuthService {
  readonly isAdmin = signal(this.read());

  login(email: string, password: string): boolean {
    const ok = email.trim().toLowerCase() === ADMIN_EMAIL && password === ADMIN_PASSWORD;
    this.isAdmin.set(ok);
    try { ok ? sessionStorage.setItem('admin', '1') : sessionStorage.removeItem('admin'); } catch {}
    return ok;
  }
  logout() { this.isAdmin.set(false); try { sessionStorage.removeItem('admin'); } catch {} }
  private read() { try { return sessionStorage.getItem('admin') === '1'; } catch { return false; } }
}
