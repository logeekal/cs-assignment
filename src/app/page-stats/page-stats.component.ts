import { Component, OnInit } from '@angular/core';
import { DataProviderService } from './../services/data-provider.service';

@Component({
  selector: 'app-page-stats',
  templateUrl: './page-stats.component.html',
  styleUrls: ['./page-stats.component.scss']
})
export class PageStatsComponent implements OnInit {


  public dataSet;

  public columnNames :Array<string> ;
  constructor(private dataProvider : DataProviderService) { }

  ngOnInit() {
    this.dataSet =  this.dataProvider.getPageStats();
    this.columnNames = Object.keys(this.dataSet[0]);
    this.columnNames.push('trends')
  }
}
