import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({ selector: 'app-login', imports: [ReactiveFormsModule, RouterLink], templateUrl: './login.component.html', styleUrl: '../register/register.component.scss' })
export class LoginComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);
  show = signal(false);
  ok = signal(false);
  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    remember: [true],
  });
  bad(c: 'email' | 'password') { const x = this.form.controls[c]; return x.invalid && (x.touched || x.dirty); }
  submit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    const { email, password } = this.form.getRawValue();
    const role = this.auth.login(email, password);
    this.ok.set(true);
    this.router.navigate([role === 'admin' ? '/admin' : '/']);
  }
  fillAdmin() { this.form.patchValue({ email: 'admin@nova.com', password: 'admin123' }); }
}
