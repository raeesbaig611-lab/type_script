import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({ selector: 'app-about', imports: [RouterLink], templateUrl: './about.component.html', styleUrl: './about.component.scss' })
export class AboutComponent {
  values = [
    { i: '🎯', t: 'Our Mission', d: 'Make great technology simple, beautiful and affordable for everyone.' },
    { i: '👁️', t: 'Our Vision', d: 'A world where every home and desk is smarter and more delightful.' },
    { i: '💎', t: 'Our Values', d: 'Quality, honesty and a relentless focus on our customers.' },
  ];
  team = [
    { n: 'Ayesha Noor', r: 'CEO & Founder', e: '👩‍💼' },
    { n: 'Usman Tariq', r: 'Head of Design', e: '👨‍🎨' },
    { n: 'Sara Khan', r: 'Lead Engineer', e: '👩‍💻' },
    { n: 'Ali Raza', r: 'Marketing Lead', e: '🧑‍💼' },
  ];
  timeline = [
    { y: '2021', t: 'Nova was founded in a tiny Lahore office.' },
    { y: '2022', t: 'Launched our first product line and reached 1,000 customers.' },
    { y: '2024', t: 'Expanded to 50+ countries with free worldwide shipping.' },
    { y: '2026', t: 'Over 12,000 happy customers and counting.' },
  ];
}
