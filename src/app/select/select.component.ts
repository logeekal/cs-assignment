import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() items: Array<any>;

  @Input() withIcon: Boolean;

  @Input() placeholderLabel = "Country";

  @Input() width: string;

  public idKey: string = 'id';

  public labelKey: string = 'label';

  public originalItems: Array<Object>

  public model : Object;

  public searchControl : FormControl = new FormControl();

  public selectItemCtrl : FormControl = new FormControl();
  p

  constructor() { }

  ngOnInit() {
    console.log(this.items)
    console.log(this.withIcon)
    this.width =  this.width+'px'
    this.selectItemCtrl.setValue(this.items);
    this.originalItems = [...this.items];

    if(this.model !== undefined ) {
      this.model = this.items.find(currentItem => currentItem[this.idKey] === this.model[this.idKey])
    }

    this.searchControl.valueChanges.subscribe(term => this.search(term))

  }


  search(term){
    console.log('Calling search')

    this.items = this.originalItems.filter(item => item[this.labelKey].toLowerCase().includes(term))
  }

  getLabel () {
    return this.model ? this.model[this.labelKey] : 'Select....'
  }

  // selected(){
  //   return this.selectItemCtrl;
  // }

  // selectionChange(value){
  //   console.log(`'Item Selected ${value}`);
  //   // console.log(this.originalItems[idx])
  //   // let selectedItem = this.originalItems.find(item=> {return item['id'] === value})
  //   // console.log(selectedItem)
  //   this.selectItemCtrl =  value
  // }

}
