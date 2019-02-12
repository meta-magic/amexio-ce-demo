/**
 * Created by kedar on 11/2/19.
 */
import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'dashboard-page',
  templateUrl: './dashboardone.component.html',
})
export class DashboardOneComponent implements OnInit {
  lineChartData: any;
  cityPopulationData: any;
  constructor() {
    this.lineChartData =  [[{"datatype":"number","label":"Day"},{"datatype":"number","label":"CNX Resources Corp"}],[0,0],[1,10],[2,23],[3,17],[4,18],[5,9],[6,11],[7,27],[8,33],[9,40],[10,32],[11,35],[12,30]];
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


