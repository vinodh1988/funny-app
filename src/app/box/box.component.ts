import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
theme="theme2"
@Input() bgcolor="lightgreen"
@Input() title:string=""
@Input("items") list:string[]=[];
@Input() buttonText:string="";
  constructor() { }

  ngOnInit(): void {
  }

  themeChange():void{
    this.theme= this.theme=="theme1"? "theme2":"theme1";
  }
}
