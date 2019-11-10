import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { DataProviderService } from './services/data-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CS-Assignment';

  barChart2 = [];

  data = {};
  public dataProvider : DataProviderService;

  constructor(dataProvider : DataProviderService){
    this.dataProvider = dataProvider;
  }



  ngOnInit(){
    //this.generateBarChart(this.data);
    
  }


  randomizeData(){
  //
  }
}
