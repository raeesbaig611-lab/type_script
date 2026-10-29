import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({ selector: 'app-contact', imports: [ReactiveFormsModule], templateUrl: './contact.component.html', styleUrl: './contact.component.scss' })
export class ContactComponent {
  private fb = inject(FormBuilder);
  sent = signal(false);
  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['General'],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });
  invalid(c: 'name' | 'email' | 'message') { const x = this.form.controls[c]; return x.invalid && (x.touched || x.dirty); }
  submit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.sent.set(true);
    this.form.reset({ subject: 'General' });
  }
}
