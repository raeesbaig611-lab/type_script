import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgClass],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  isPass: boolean = true;

  toggleResult() {
    this.isPass = !this.isPass;
  }
}
