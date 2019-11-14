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


  public barChart: any = [] ;
  
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
      options:  {
        ...this.chartOptions,
        tooltips:{
          caretPadding: 5,
          bodyFontColor: 'rgba(0,0,0,0.77)',
          backgroundColor: "rgb(255,255,255)",
          // bodySpacing: 10,
          caretSize: 5,
          titleSpacing: 20,
          yPadding: 10,
          xPadding: 10,
          footerSpacing: 10,
          titleFontColor:  'rgba(0,0,0,0.77)',
          borderColor: "rgba(0,0,0,0.80)",
          borderWidth: 0.5
          // footerSpacing: 10

        }
      }
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

    Chart.defaults.global.defaultFontSize= 12;
    // Chart.defaults.global.tooltips.backgroundColor= "rgba(230,230,230)"
    // Chart.defaults.global.tooltips.bodyFontColor = "rgb(0,0,0)";
    Chart.defaults.global.tooltips.cornerRadius= 3;
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
        console.log('Changing theme of graph')
        //light theme
      
        this.barChart.options.scales.xAxes[0].ticks.fontColor = "rgba(0,0,0, 0.50)";
        this.barChart.options.scales.yAxes[0].ticks.fontColor = "rgba(0,0,0, 0.50)";
        this.barChart.options.tooltips = {
          caretPadding: 5,
          bodyFontColor: 'rgba(0,0,0,0.77)',
          backgroundColor: "rgb(255,255,255)",
          // bodySpacing: 10,
          caretSize: 5,
          titleSpacing: 20,
          yPadding: 10,
          xPadding: 10,
          footerSpacing: 10,
          titleFontColor:  'rgba(0,0,0,0.77)',
          borderColor: "rgba(0,0,0,0.80)",
          borderWidth: 0.5
          // footerSpacing: 10

        }
        this.barChart.update();
      }else{
        //dark theme
        console.log('Changing theme of graph')
        this.barChart.options.scales.xAxes[0].ticks.fontColor = "rgba(255,255,255, 0.50)";
        this.barChart.options.scales.yAxes[0].ticks.fontColor = "rgba(255,255,255, 0.50)";
        this.barChart.options.tooltips = {        }
        console.log( this.barChart.options.scales.xAxes[0].ticks);

        this.barChart.update();
      }
    });
  }

  getToolTipLayout(tooltipModel: any) {
    let tooltipEl = document.getElementById("chartjs-tooltip");

    // Create element on first render
    if (!tooltipEl) {
      tooltipEl = document.createElement("div");
      tooltipEl.id = "chartjs-tooltip";
      tooltipEl.innerHTML = "<table></table>";
      document.body.appendChild(tooltipEl);
    }

    // Hide if no tooltip
    if (tooltipModel.opacity === 0) {
      tooltipEl.style.opacity = "0%";
      return;
    }

    // Set caret Position
    tooltipEl.classList.remove("above", "below", "no-transform");
    if (tooltipModel.yAlign) {
      tooltipEl.classList.add(tooltipModel.yAlign);
    } else {
      tooltipEl.classList.add("no-transform");
    }

    function getBody(bodyItem) {
      return bodyItem.lines;
    }

    if (tooltipModel.body) {
      var titleLines = tooltipModel.title || [];
      var bodyLines = tooltipModel.body.map(getBody);

      var innerHtml = "<thead>";

      titleLines.forEach(function(title) {
        innerHtml += "<tr><th>" + title + "</th></tr>";
      });
      innerHtml += "</thead><tbody>";

      bodyLines.forEach(function(body, i) {
        var colors = tooltipModel.labelColors[i];
        var style = "background:" + colors.backgroundColor;
        style += "; border-color:" + colors.borderColor;
        style += "; border-width: 2px";
        var span = '<span style="' + style + '"></span>';
        innerHtml += "<tr><td>" + span + body + "</td></tr>";
      });
      innerHtml += "</tbody>";

      var tableRoot = tooltipEl.querySelector("table");
      tableRoot.innerHTML = innerHtml;
    }

    // `this` will be the overall tooltip
     let position = this.barChart.canvas.getBoundingClientRect();
     tooltipEl.style.opacity = '100%';
     tooltipEl.style.position = 'absolute';
     tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
     tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
     tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
     tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
     tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
     tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
     tooltipEl.style.pointerEvents = 'none';
  }

}
