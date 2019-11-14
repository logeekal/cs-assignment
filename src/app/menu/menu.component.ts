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
      // logo: "align-left",
      logo: "dashboard",
      icon: 'arrow_drop_down',
      selected: 1,
      items: ['Performance', 'Growth', 'Historical']
    },{
      header: "Calendar",
      logo: "calendar",
      icon: 'arrow_drop_down',
      selected: false,
      items: ['Sample 1', 'Sample2', 'Sample3']
    },{
      header: "Inbox",
      // logo: "mail",
      logo: "inbox",
      icon: 'arrow_drop_down',
      selected: false,
      items: ['All Mail', 'Sent', 'Drafts']
    },{
      header: "Invoicing",
      // logo: "mail",
      logo: "invoice",
      icon: 'arrow_drop_down',
      selected: false,
      items: []
    },{
      header: "Lab / Experimental",
      // logo: "mail",
      logo: "lab",
      icon: 'arrow_drop_down',
      selected: false,
      items: []
    }]
  }
  
}
