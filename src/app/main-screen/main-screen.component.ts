import { Component, OnInit } from '@angular/core';
import { DataProviderService } from './../services/data-provider.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {

  public countryList ;
  constructor(private dataProvider : DataProviderService) { }

  ngOnInit() {
    this.countryList = this.dataProvider.countryDataWithIcon;
  }

}
