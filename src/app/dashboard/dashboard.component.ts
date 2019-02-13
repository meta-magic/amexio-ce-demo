/**
 * Created by kedar on 11/2/19.
 */
import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  lineChartData: any;
  lastThreeYearsData: any;
  cityPopulationData: any;
  constructor() {
    this.lineChartData = [
      [{ "datatype": "number", "label": 'Day' }, { "datatype": "number", "label": 'Sales' },
      ],
      ['MON', 10],
      ['TUE', 30 ],
      ['WED', 20],
      ['THU', 10],
      ['FRI', 30],
      ['SAT', 20],
      ['SUN', 40],
      
    ];

    this.cityPopulationData = [
      ['Quaters', 'population', 'color'],
      ['Q1', 383 , 'hsla(0,0%,100%,.8)'],
      ['Q2', 943, 'hsla(0,0%,100%,.8)'],
      ['Q3', 692,'hsla(0,0%,100%,.8)'],
      ['Q4', 467, 'hsla(0,0%,100%,.8)']
    ];

    this.lastThreeYearsData =
    [
      ['Last 4 Years', 'Year', 'Revenue'],
      ['2015', 150],
      ['2016', 180 ],
      ['2017', 100],
      ['2018', 80],
     
      
    ];
  }
  ngOnInit() {
  }

}


