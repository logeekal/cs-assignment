import { Component, OnInit, Input } from "@angular/core";
import * as Color from "color";
import randomColor  from 'randomcolor';
import { DataProviderService } from './../services/data-provider.service';
import { Subject } from 'rxjs';

@Component({
  selector: "app-chart-handler",
  templateUrl: "./chart-handler.component.html",
  styleUrls: ["./chart-handler.component.scss"]
})
export class ChartHandlerComponent implements OnInit {
  @Input() mode: string;
  @Input() name: string;
  @Input() colorString: String;

  public chartOptions: Chart.ChartOptions;

  public datasetOptions: Chart.ChartDataSets | any;

  public type: Chart.ChartType;

  public color: Color;

  public data: any;

  public completedata: any;

  public currentMonth: string;

  public currentYear: string;

  public trendData : any;
  



  public selectableYears : Array<Object> = [];

  public seletableMonths : Array<Object> = [];

  constructor(private dataProvider: DataProviderService) {
    for(let year of this.dataProvider.years){
      this.selectableYears.push({
        id: year,
        label: year
      });
    }

    for(let month in this.dataProvider.months){
      this.seletableMonths.push({
        idx: month,
        id: this.dataProvider.months[month]['month'].substring(0,3).toUpperCase(),
        label: this.dataProvider.months[month]['month']
    });
  }

    console.log(this.seletableMonths);
    console.log(this.selectableYears)
    }

  ngOnInit() {




    this.color = new Color(randomColor({format:'rgb', luminosity: 'dark'}));
    console.log(`Color is :`)
    console.log(this.color);
    
    if (this.mode === "full") {

      this.chartOptions = {
        showLines: true,
        responsive: true,
        scales: {
          yAxes: [
            {
              display: true,
              ticks:  {
                beginAtZero: false,
                stepSize: 30,

              },
              gridLines: {
                display: true
              }
            }
          ],
          xAxes: [
            {
              display: true,
              gridLines:{
                display: false,
              },
              ticks:  {
              }
            }
          ]
        },
        legend: {
          display: false
        },
        layout: {
          padding: {
            top: 10,
            left: 10,
            right: 10,
            bottom: 10
          }
        }
      };

      this.datasetOptions = {
        backgroundColor: this.color.toString(),
        barThickness: 20,
        fill: true,
        borderCapStyle: "butt",
        borderWidth: 0,
        borderColor: this.color.toString()
      };

      this.type = "bar"


    } else if (["compact","slim"].includes(this.mode)) {
      console.log(`Mode is ${this.mode}`)
      this.chartOptions = {
        showLines: true,
        responsive: true,
        scales: {
          yAxes: [
            {
              display: false,
              gridLines: {
                display: false
              }
            }
          ],
          xAxes: [
            {
              display: false,
              gridLines: {
                display: false
              },
              ticks: {
                beginAtZero: true,
                stepSize: 50,
              }
            }
          ]
        },
        legend: {
          display: false
        },
        layout: {
          padding: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }
        }
      };

      this.datasetOptions = {
        backgroundColor: this.color.alpha(0.2).toString(),
        fill: true,
        borderCapStyle: "butt",
        borderWidth: 1,
        borderColor: this.color.toString(),
        pointRadius: 0,
      };

      this.type= "line"
    }

    this.completedata = this.dataProvider.prepareData(this.name, this.datasetOptions);
    this.currentMonth = 'December';
    this.currentYear = 2017;

    let detailData =  this.completedata.finalData;
    let summaryData = this.completedata.summary;
    this.data =  detailData[this.currentYear][this.currentMonth];
  }



  getSummaryData(){
    let typeOfData = '';
    let symbol = '';
    let name = this.name.toLocaleLowerCase();
    // console.log(`in summary data :  `);
    
    let currentContext = this.completedata.summary[this.currentYear][this.currentMonth];
    // console.log(this.completedata.summary)
    if (name === 'bounce rate' || name.indexOf('avg') > -1){
      typeOfData = 'average';
      if(name === 'bounce rate'){
        symbol = '%'
      }else if (name === 'avg. visit duration'){
        symbol = 's'
      }

    }else {
      typeOfData = 'total';
    }

    return currentContext[typeOfData]+symbol
  }

  getChartTrend(){
    if(this.trendData){
      return this.trendData
    }
    let trend =  (Math.ceil(Math.random()*10000)%99 < 20) ? -1 : 1;

    let trendAmount = Math.ceil(Math.random()*10000)%19;

    let trendExpression =  trendAmount+'%';

    this.trendData = {trendExpression, trend};

    return this.trendData;
  }

  monthChanged(month){
    this.currentMonth = month.label;
    let newData =  this.completedata.finalData[this.currentYear][this.currentMonth];
    this.dataProvider.updateChartData(newData);

  }

  yearChanged(year){
    console.log(`Handling year ${year.id}`);
    this.currentYear= `${year.id}`;
    console.log(this.completedata);
    let newData =  this.completedata.finalData[this.currentYear][this.currentMonth];
    this.dataProvider.updateChartData(newData);
  }
}
