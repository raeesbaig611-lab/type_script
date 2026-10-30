import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@Component({
  imports: [RouterOutlet ,
    MatButtonModule,
    MatCardModule ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

}
