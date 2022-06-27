import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
@Output() selectedItem:EventEmitter<string>=new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  themeChange():void{
    this.theme= this.theme=="theme1"? "theme2":"theme1";
  }

  handleClick(data:string):void{
    this.selectedItem.emit(data)
  }
}
