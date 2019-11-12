import { Injectable, HostListener } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private _darkTheme = new Subject<boolean>();
  public innerWidth =  new Subject<any>();



  isDarkTheme =  this._darkTheme.asObservable();

  constructor() { }

  ngOnInit(){
    this.innerWidth.next(window.innerWidth);

    
  }



  setDarkTheme(value){
    console.log(`Seeting darkTheme to ${value}`);
    this._darkTheme.next(value);
  }
}
