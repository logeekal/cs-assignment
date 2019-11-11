import { Component, OnInit } from '@angular/core';
import { DataProviderService } from './../services/data-provider.service';

@Component({
  selector: 'app-social-traffic',
  templateUrl: './social-traffic.component.html',
  styleUrls: ['./social-traffic.component.scss']
})
export class SocialTrafficComponent implements OnInit {

  
  public dataSet;

  public columnNames :Array<string> ;

  constructor(private dataProvider : DataProviderService) { }

  ngOnInit() {
    this.dataSet =  this.dataProvider.getSocialStats();
    this.columnNames = Object.keys(this.dataSet[0]);
  }

}
