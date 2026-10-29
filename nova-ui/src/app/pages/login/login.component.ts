import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({ selector: 'app-login', imports: [ReactiveFormsModule, RouterLink], templateUrl: './login.component.html', styleUrl: '../register/register.component.scss' })
export class LoginComponent {
  private fb = inject(FormBuilder);
  show = signal(false);
  ok = signal(false);
  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    remember: [true],
  });
  bad(c: 'email' | 'password') { const x = this.form.controls[c]; return x.invalid && (x.touched || x.dirty); }
  submit() { if (this.form.invalid) { this.form.markAllAsTouched(); return; } this.ok.set(true); }
}
