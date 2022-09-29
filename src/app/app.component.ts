import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Title';

  count = 5;

  number1 = 1;

  number2 = 22;

  add = () => {
    let myresult = document.getElementById("demo") as HTMLInputElement;
    myresult.value = String(this.number1 + this.number2);
  }


  
  
  listofnumbers = [1, 2, 3, 4, 5];

  listoffruits = ['Apple', 'Mango', 'Banana', 'Grapes', 'Papaya'];

  listofnames = ['Ayush Raj', 'Prandeep Chiring Phukan', 'Harsh Kumar Dwivedi'];

  increment = () => {
    this.count++;
  }

  decrement = () => {
    this.count--;
  }

}
