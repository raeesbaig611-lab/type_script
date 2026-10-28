import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgStyle],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  isPassed: boolean = true;

  toggleResult() {
    this.isPassed = !this.isPassed;
  }
}
