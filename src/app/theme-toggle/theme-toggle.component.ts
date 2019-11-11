import { Component, OnInit } from '@angular/core';
import { ThemeService } from './../services/theme/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent implements OnInit {

  private isDarkTheme : Observable<boolean>;

  constructor(private themeService : ThemeService) {

   }

  ngOnInit() {
    this.isDarkTheme =  this.themeService.setDarkTheme;

  }

  toggleDarkTheme(value){
    this.themeService.setDarkTheme(value);
  }

}
