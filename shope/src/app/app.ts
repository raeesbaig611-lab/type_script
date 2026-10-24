import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';



interface student{

 name: string
 age: number


}


@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {


//    myname: string  = "Ali";
//   age: number  = 32;
//   isPass: boolean  = false;
//   marks: number[]  = [20 , 60, 100, 70];
//   kuchbhi: any  = "Random text @ 13 " ;
//

//  add(a: number, b: number): number {
// return a + b;
// }
 s1: student = { name: "Ali", age: 20 };

  s2: student = { name: "Ahmed", age: 22 };
// console.log(s1.name);   // Ali


}

// const myname: string  = "Ali";
// const age: number  = 32;
// const isPass: boolean  = false;
// const marks: number[]  = [20 , 60, 100, 70];
// const kuchbhi: any  = "Random text @ 13 " ;