import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public alphabets: string[][] = [["A", "B", "C", "D", "E"],
                                ["F", "G", "H", "I", "J"],
                                ["K", "L", "M", "N", "O"],
                                ["P", "Q", "R", "S", "T"],
                                ["U", "V", "W", "X", "Y"],
                                ["Z"]];

}
