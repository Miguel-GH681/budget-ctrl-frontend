import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  
  @Input() chartData? : ChartConfiguration<'pie'>['data'];

  lineChartOptions: ChartOptions<'pie'> = { responsive: true };
  lineChartLegend = false;

  constructor() { 
  }

  ngOnInit(): void {
  }
}
