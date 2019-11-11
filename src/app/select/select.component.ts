import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, map } from 'rxjs/operators';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() items: Array<any>;

  @Input() withIcon: Boolean;

  @Input() width: string;

  @Input() defaultId: string;

  @Output() selectionChanged = new EventEmitter();




  public idKey: string = 'id';

  public labelKey: string = 'label';

  public originalItems: Array<Object>

  public model : Object;

  public searchControl : FormControl = new FormControl();

  public selectItemCtrl : FormControl = new FormControl();
  p

  constructor() { }

  ngOnInit() {
    console.log(`Now inititing select`)
    console.log(this.items)
    console.log(this.withIcon)
    this.width =  this.width+'px'

    this.originalItems = [...this.items];
    
    this.setdefaultValue(this.defaultId);

    if(this.model !== undefined ) {
      this.model = this.items.find(currentItem => currentItem[this.idKey] === this.model[this.idKey])
    }

    this.searchControl.valueChanges.subscribe(term => this.search(term))
    this.newSelection()
  }


  search(term){
    console.log('Calling search')

    this.items = this.originalItems.filter(item => item[this.labelKey].toLowerCase().includes(term))
  }

  getLabel () {
    return this.model ? this.model[this.labelKey] : 'Select....'
  }


  setdefaultValue(defaultId){
    console.log(`seaqrching for ${defaultId} in ${JSON.stringify(this.originalItems)}`);
    if(defaultId){
      let result= this.originalItems.find(item => {
        console.log(`Now matching ${item.id}  and ${defaultId}`)
        return  item.id === defaultId
      })
      this.selectItemCtrl.setValue(result);
    }else{
      this.selectItemCtrl.setValue(this.originalItems[0])
    }

  }

  newSelection(){
    this.selectItemCtrl.valueChanges.subscribe(val => {
      console.log(`Value Changed to ${JSON.stringify(val)}`);
      this.selectionChanged.emit(val);
    })

  }
}
