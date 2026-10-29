import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `<section class="container nf"><h1 class="gradient-text">404</h1><h2>Page not found</h2><p>The page you are looking for does not exist.</p><a routerLink="/" class="btn btn-primary">Go home</a></section>`,
  styles: `.nf { text-align: center; padding: 6rem 0; display: grid; gap: .8rem; justify-items: center; } h1 { font-size: 7rem; line-height: 1; font-weight: 800; } p { color: var(--muted); margin-bottom: 1rem; }`,
})
export class NotFoundComponent {}
