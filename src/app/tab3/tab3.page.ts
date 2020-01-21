import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Chart } from "chart.js";
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page  implements OnInit {
  @ViewChild("barCanvas",{ static: true }) barCanvas: ElementRef;
  @ViewChild("doughnutCanvas",{ static: true }) doughnutCanvas: ElementRef;
  @ViewChild("lineCanvas",{ static: true }) lineCanvas: ElementRef;


  private barChart: Chart;
  private doughnutChart: Chart;
  private lineChart: Chart;
  constructor() {}

  ngOnInit() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: "bar",
      data: {
        labels: ["4th", "5th", "8th", "9th", "1oth", "12th"],
        datasets: [
          {
            label: "Maths",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(55, 99, 132, 0.2)",
              "rgba(66, 77, 235, 0.2)",
              "rgba(255, 55, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 66, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(66,33,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(55, 66, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(44, 102, 255, 1)",
              "rgba(22, 159, 64, 1)"
            ],
            borderWidth: 1
          },
          {
            label: "social",
            data: [12, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          },
          {
            label: "science",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(678, 32, 132, 0.2)",
              "rgba(66, 162, 88, 0.2)",
              "rgba(345, 56, 86, 0.2)",
              "rgba(75, 66, 192, 0.2)",
              "rgba(153, 21, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(33,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(33, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(234, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });

    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: "doughnut",
      data: {
        datasets: [
          {
            label: "# of Votes",
            data: [12, 16, 13],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              
            ],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
          }
        ]
      }
    });

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "2019-2020",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            // borderCapStyle: "butt",
            borderDash: [],
            // borderDashOffset: 0.0,
            // borderJoinStyle: "miter",
            // pointBorderColor: "rgba(75,192,192,1)",
            // pointBackgroundColor: "#fff",
            // pointBorderWidth: 1,
            // pointHoverRadius: 5,
            // pointHoverBackgroundColor: "rgba(75,192,192,1)",
            // pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 55, 67, 54, 74,87,49],
            spanGaps: false
          }
        ]
      }
    });
  }
  
}


