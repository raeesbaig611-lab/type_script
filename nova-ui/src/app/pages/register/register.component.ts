import { Component, inject, signal } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({ selector: 'app-register', imports: [ReactiveFormsModule, RouterLink], templateUrl: './register.component.html', styleUrl: './register.component.scss' })
export class RegisterComponent {
  private fb = inject(FormBuilder);
  show = signal(false);
  ok = signal(false);
  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9+\-\s]{9,15}$/)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirm: ['', Validators.required],
    terms: [false, Validators.requiredTrue],
  }, { validators: (g: AbstractControl) => (g.get('password')?.value === g.get('confirm')?.value ? null : { mismatch: true }) });
  bad(c: 'name' | 'email' | 'phone' | 'password' | 'confirm') { const x = this.form.controls[c]; return x.invalid && (x.touched || x.dirty); }
  get mismatch() { return this.form.hasError('mismatch') && this.form.controls.confirm.touched; }
  get strength() {
    const p = this.form.controls.password.value;
    return [p.length >= 6, /[A-Z]/.test(p), /[0-9]/.test(p), /[^A-Za-z0-9]/.test(p)].filter(Boolean).length;
  }
  submit() { this.form.markAllAsTouched(); if (this.form.invalid) return; this.ok.set(true); }
}
