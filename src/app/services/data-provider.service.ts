import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataProviderService {
  constructor() {
    console.log(`Definining data provider Service.`);
  }

  prepareData(parameter, options) {
    console.log(parameter);
    console.log(options);
    let years = [2017, 2018, 2019];
    let months = [
      { month: "January", days: 31 },
      { month: "February", days: 28 },
      { month: "March", days: 30 },
      { month: "April", days: 31 },
      { month: "March", days: 30 },
      { month: "April", days: 30 },
      { month: "May", days: 31 },
      { month: "June", days: 30 },
      { month: "July", days: 31 },
      { month: "August", days: 31 },
      { month: "September", days: 30 },
      { month: "October", days: 31 },
      { month: "November", days: 30 },
      { month: "December", days: 31 }
    ];

    let finalData = {};
    let summary = {};
    let labels;

    for (let year of years) {
      finalData[year] = {};
      for (let month of months) {
        let Xlabels = [];
        let YData = [];
        for (let date = 1; date <= month.days; date++) {
          Xlabels.push(date);
          YData.push(Math.ceil((Math.random() * 1000000) % 50));
        }
        let YLabels = parameter;

        finalData[year][month.month] = {
          labels: Xlabels,
          datasets: [
            {
              ...options,
              label: YLabels,
              data: YData
            }
          ]
        };

        let total = YData.reduce((prev, curr)=>{return prev +  curr});
        let avg = Math.round(total/YData.length);
        summary = {
          ...summary,
          [year]: {
            ...summary[year],
            [month.month]: {
              total: total,
              average:  avg
            }
          }
        }
      }
    }

    console.log(summary);
    return {finalData, summary};
  }
}
