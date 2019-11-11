import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private _darkTheme = new Subject<boolean>();
  isDarkTheme =  this._darkTheme.asObservable();

  constructor() { }

  setDarkTheme(value){
    console.log(`Seeting darkTheme to ${value}`);
    this._darkTheme.next(value);
  }
}
