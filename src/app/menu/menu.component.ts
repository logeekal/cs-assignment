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
      selected: 1,
      items: ['Performance', 'Growth', 'Historical']
    },{
      header: "Calendar",
      logo: "calendar",
      icon: 'expand_more',
      selected: false,
      items: ['Sample 1', 'Sample2', 'Sample3']
    },{
      header: "Inbox",
      logo: "mail",
      icon: 'expand_more',
      selected: false,
      items: ['All Mail', 'Sent', 'Drafts']
    }]
  }
  
}
