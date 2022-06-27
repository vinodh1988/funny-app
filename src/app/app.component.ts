import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-app';
  developers:string[]=["Johnson","Mahesh","Vijay","Roger","Arun"];
  font='Courier';
  titles=["Fruits","Vegetables","Spices","Electronics"]
  buttonTitle=["Fruit More..","Veg More..","Spices More...","Electronic More..."]
  bgcolors=["lightblue","tomato","lightgreen","yellow"];
  message:string="NO MESSAGE YET"

  items:string[][]=[
    ["Oranges","Apples","Bananas","JackFruit","Cherry"],
    ["Potato","Tomato","Brinjal","Onion"],
    ["Cinnamon","Turmeric","Cloves"],
    ["Pendrive","Harddrive","Laptop"]
  ]

  receiveData(data:any):void{
    this.message="The user has selected "+data
  }
}
