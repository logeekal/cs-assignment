import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { DataProviderService } from './services/data-provider.service';
import { ThemeService } from './services/theme/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CS-Assignment';

  barChart2 = [];

  data = {};

  public isDarkTheme: Observable<boolean>;

  constructor(private themeService: ThemeService,  private dataProvider : DataProviderService){

  }



  ngOnInit(){
    //this.generateBarChart(this.data);
    this.isDarkTheme = this.themeService.isDarkTheme;
    console.log(this.isDarkTheme)
    
  }


  randomizeData(){
  //
  }
}
