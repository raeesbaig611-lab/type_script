import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // Example 1 — @if
  isPass: boolean = true;

  // Example 2 — @for
  students: string[] = ['Ali', 'Ahmed', 'Sara', 'Ayesha'];

  // Example 3 — @switch
  grade: string = 'A';
}
