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
      
    ]

    this.cityPopulationData = [
      ['city', 'population'],
      ['Mumbai', 94423],
      ['Kochi', 69932],
      ['Chennai', 46467],
      ['Pune', 31244],
    ]
;
  }
  ngOnInit() {
  }

}


