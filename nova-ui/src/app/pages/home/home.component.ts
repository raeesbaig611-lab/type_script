import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({ selector: 'app-home', imports: [RouterLink], templateUrl: './home.component.html', styleUrl: './home.component.scss' })
export class HomeComponent {
  features = [
    { icon: '⚡', title: 'Lightning Fast', text: 'Optimised builds and lazy-loaded routes keep every page instant.' },
    { icon: '🎨', title: 'Beautiful Design', text: 'A clean, modern interface with smooth animations and dark mode.' },
    { icon: '🔒', title: 'Secure by Default', text: 'Best-practice architecture so your data always stays protected.' },
    { icon: '📱', title: 'Fully Responsive', text: 'Looks perfect on phones, tablets and desktops alike.' },
    { icon: '🧩', title: 'Modular', text: 'Standalone components that are easy to reuse and maintain.' },
    { icon: '📊', title: 'Live Analytics', text: 'Understand your numbers with a built-in dashboard.' },
  ];
  stats = [{ v: '12K+', l: 'Happy users' }, { v: '99.9%', l: 'Uptime' }, { v: '150+', l: 'Countries' }, { v: '4.9★', l: 'Avg. rating' }];
  reviews = [
    { n: 'Sara Khan', r: 'Product Designer', t: 'The most polished UI I have used this year. Absolutely love it!' },
    { n: 'Ali Raza', r: 'Frontend Dev', t: 'Clean, fast and so easy to navigate. Great work by the team.' },
    { n: 'Hina Malik', r: 'Founder', t: 'Our customers noticed the difference the very first day.' },
  ];
}
