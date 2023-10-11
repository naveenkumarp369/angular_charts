import { Component, OnInit } from '@angular/core';
import {
  ArcElement,
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  PolarAreaController,
  RadialLinearScale,
} from 'chart.js';
@Component({
  selector: 'app-demo-chart',
  templateUrl: './demo-chart.component.html',
  styleUrls: ['./demo-chart.component.scss'],
})
export class DemoChartComponent implements OnInit {
  public barChartOptions = {
    responsive: true,
  };
  public chart: any;

  public barChartLabels = ['Label 1', 'Label 2', 'Label 3'];
  public barChartType = 'line';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData = [
    { data: [65, 59, 80], label: 'Series A' },
    // Add more datasets if needed
  ];

  //sdffd

  constructor() {}

  ngOnInit(): void {
    Chart.register(
      LineController,
      BarController,
      PolarAreaController,
      RadialLinearScale,
      PointElement,
      LineElement,
      ArcElement,
      BarElement,
      CategoryScale,
      LinearScale
    );
    // ['March', 'April', 'May', 'June', 'July', 'August', 'September']
    const labels = [
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
    ];
    const data = {
      type:"line",
      labels: labels,
      datasets: [
        {
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
          ],
          borderWidth: 1,
        },
      ],
    };

    // this.createChart();
    this.newStackedChart();
  }

  createChart() {
   
    this.chart = new Chart('myChart', {
      type: 'bar', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: ['Total', 'Own', 'Lease'],
        datasets: [
          {
            label: 'Count',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: ['#00CCF2', '#34BFA3', '#F4516C'],
          },
        ],
      },
      options: {
        aspectRatio: 3.5,
        scales: {
          r: {
            grid: {
              display: false,
            },
            ticks: {
              z: 0,
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            position: 'right',
            labels: {
              font: {
                size: 14, // Change the font size as desired
              },
              generateLabels: (chart: any) => {
                const datasets = chart.data.datasets;

                return datasets[0].data.map(
                  (data: any, i: string | number) => ({
                    text: `${chart.data.labels[i]} - ${data}`,
                    fillStyle: datasets[0].backgroundColor[i],
                    index: i,
                  })
                );
              },
            },
          },
        },
      },
    });
  }

  newStackedChart()
  {
    this.chart = new Chart('stackedAreaChart', {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Dataset 1',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [65, 59, 80, 81, 56],
            fill: true,
          },
          {
            label: 'Dataset 2',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            data: [28, 48, 40, 19, 86],
            fill: true,
          },
          {
            label: 'Dataset 3',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            data: [45, 25, 16, 36, 67],
            fill: true,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'linear', // Use linear scale for X-axis
            position: 'bottom',
            
          },
          y: {
            
            stacked: true, // Enable stacking for Y-axis
          },
        },
      },
    });
  }

  stackedAreaChart() {
    var canvasElement = document.getElementById(
      'stackedAreaChart'
    ) as HTMLCanvasElement | null;

    if (canvasElement !== null) {
      var ctx = canvasElement.getContext('2d')??"";
      var stackedAreaChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May'],
          datasets: [
            {
              label: 'Dataset 1',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              data: [65, 59, 80, 81, 56],
              fill: true,
            },
            {
              label: 'Dataset 2',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
              data: [28, 48, 40, 19, 86],
              fill: true,
            },
            {
              label: 'Dataset 3',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
              data: [45, 25, 16, 36, 67],
              fill: true,
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: 'linear', // Use linear scale for X-axis
              position: 'bottom',
            },
            y: {
              stacked: true, // Enable stacking for Y-axis
            },
          },
        },
      });

      this.chart =stackedAreaChart;
    }
  }
}
