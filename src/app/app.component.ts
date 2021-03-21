import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  includeLetters : boolean = false;
  includeNumbers : boolean = false;
  includeSymbols : boolean = false;
  password : string;

  constructor(){
    this.password='';
  }
  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }
  onButtonClick(){
    console.log(`include letters : ${this.includeLetters}`);
    console.log(`include Numbers : ${this.includeNumbers}`);
    console.log(`include Symbolds : ${this.includeSymbols}`);
    this.password = "MY Password !!!"
  }
  getPassword(){
    return this.password;
  }
}
