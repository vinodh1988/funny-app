import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
theme="theme2"
  constructor() { }

  ngOnInit(): void {
  }

  themeChange():void{
    this.theme= this.theme=="theme1"? "theme2":"theme1";
  }
}
