import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}

  public alphabets: string[][] = [["A", "B", "C", "D", "E"],
                                ["F", "G", "H", "I", "J"],
                                ["K", "L", "M", "N", "O"],
                                ["P", "Q", "R", "S", "T"],
                                ["U", "V", "W", "X", "Y"],
                                ["Z"]];
  public indexY = 0;
  public answerX = 0;
  public userSelectedOptions: string[][] = [[],[],[],[],[]];
  public name:string = "";
  public show_main = 1;

  public onSelectFirst(value: string[]): void {
    for(const key in value) {
      this.userSelectedOptions[key][this.indexY]= value[key];
    }
    this.indexY++;
  }

  public onSubmit(data: string): void {
    let numberOfLetters = Number(data);
    if( numberOfLetters < 1 && numberOfLetters > 15)
      numberOfLetters = 0;
  }
  
  public onSelectSecond(index: number): void {
    this.name = this.name + this.userSelectedOptions[index][this.answerX];
    this.answerX++;
    console.log(this.name);
  }

  public confirm_1(): void {
    this.show_main = 0;
  }
}
