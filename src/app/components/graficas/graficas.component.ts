import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styles: []
})
export class GraficasComponent implements OnInit {


    // Doughnut
    @Input('ChartLabels') doughnutChartLabels:string[] = [];
    @Input('ChartData') doughnutChartData:number[] = [];
    @Input('ChartType') doughnutChartType:string = '';

  constructor() { }

  ngOnInit() {
  }

}
