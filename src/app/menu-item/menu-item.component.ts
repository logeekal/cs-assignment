import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuItemComponent implements OnInit {

  @Input() menu: any;

  isExpanded : boolean = false;

  constructor() { }

  ngOnInit() {  
    console.log('Now generating menu item;')
    console.log(this.menu)
    if(this.menu.selected){
      console.log(`is expanded is true for ${JSON.stringify(this.menu)}`)
      this.isExpanded= true;
    }
  }

  whenOpened(){
    console.log('Expansion panel fired.');
    this.menu['icon'] = 'arrow_drop_up'
  }

  whenClosed(){
    this.menu['icon'] = 'arrow_drop_down'
  }


  getIcon(image){
    return "./assets/icons/"+image+".png";
  }
}
