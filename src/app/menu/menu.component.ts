import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menu: Object;
  
  constructor() { }

  ngOnInit() {
    this.menu = [{
      header: "Header 1",
      icon: 'thumbs-up',
      items: ['Item1', 'item2', 'item3']
    },{
      header: "Header 2",
      icon: 'thumbs-up',
      items: ['Item1', 'item2', 'item3']
    },{
      header: "Header 3",
      icon: 'thumbs-up',
      items: ['Item1', 'item2', 'item3']
    }]
  }
  
}
