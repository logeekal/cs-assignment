import { Component, OnInit, Host, HostListener } from '@angular/core';
import { ThemeService } from './../services/theme/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent implements OnInit {

  public isDarkTheme : Observable<boolean>;

  constructor(private themeService : ThemeService) {

   }

  ngOnInit() {
    this.isDarkTheme =  this.themeService.isDarkTheme;
    this.themeService.setDarkTheme(false);
  }

  toggleDarkTheme(value){
    this.themeService.setDarkTheme(value);
  }

}
