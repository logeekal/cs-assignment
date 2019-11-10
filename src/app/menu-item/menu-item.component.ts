import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuItemComponent implements OnInit {

  @Input() menu: Object;

  constructor() { }

  ngOnInit() {  
    console.log('Now generating menu item;')
    console.log(this.menu)
  }

}
