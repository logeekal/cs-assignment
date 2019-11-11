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
      header: "Dashboard",
      logo: "align-left",
      icon: 'expand_more',
      items: ['Item1', 'item2', 'item3']
    },{
      header: "Calender",
      logo: "calendar",
      icon: 'expand_more',
      items: ['Item1', 'item2', 'item3']
    },{
      header: "Inbox",
      logo: "mail",
      icon: 'expand_more',
      items: ['Item1', 'item2', 'item3']
    }]
  }
  
}
