import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Chart }  from 'chart.js';
import { DataProviderService } from './../services/data-provider.service';
import { Observable } from 'rxjs';
import { ThemeService } from './../services/theme/theme.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

export class ChartComponent implements OnInit {
  @Input() name: String;
  @Input() type: Chart.ChartType;
  @Input() datasetOptions: Chart.ChartDataSets | any;
  @Input() chartOptions: Chart.ChartOptions;
  @Input() width: string;
  @Input() height: string;
  @Input() data: any;


  public barChart: any = [];
  
  // public data : any = {};

  public canvasHeight : string ;

  public canvasWidth: string;

  public summary: any = {};

  public newData : Observable<any>;

  constructor(private dataProvider : DataProviderService, private elementRef : ElementRef, private themeService : ThemeService) { 
   
  }


  generateBarChart(data){

    let ctx = this.elementRef.nativeElement.querySelector('#canvas');
     ctx.width =  this.width
     ctx.height =  this.height


    console.log('Geneting chart ');
    console.log(data);
    this.barChart = new Chart(ctx,{
      type: this.type,
      data: data,
      options:  this.chartOptions
    });

    
  }



  ngOnInit() {
    this.canvasHeight =  this.height;
    this.canvasWidth = this.width;

    
    console.log('Printing chart options')
    console.log(this.chartOptions);
    console.log(this.name)
    console.log(this.type);
    console.log(this.datasetOptions);
    console.log(this.canvasHeight);
    console.log('``````````````````````````````')
    
    
    // console.log(result);
    // this.data = result.finalData;
    // this.summary =  result.summary;

    Chart.defaults.global.defaultFontSize= 15;

    
    // console.log(this.summary);
    this.generateBarChart(this.data);
    this.newData = this.dataProvider.updatingData;

    this.newData.subscribe(newData => {
      console.log(newData);
      this.barChart.data.datasets[0].data =  newData.datasets[0].data;
      this.barChart.update({
        duration: 800,
        easing: 'easeInOutCubic'});
    });


    this.themeService.isDarkTheme.subscribe(value=>{
      if(!value){

        this.barChart.options.scales.xAxes[0].ticks.fontColor = "#3f51b5";
        this.barChart.options.scales.yAxes[0].ticks.fontColor = "#3f51b5";
        this.barChart.update();
      }else{

        this.barChart.options.scales.xAxes[0].ticks.fontColor = "#ffeb3b";
        this.barChart.options.scales.yAxes[0].ticks.fontColor = "#ffeb3b";
        this.barChart.update();
      }
    });
  }

}
