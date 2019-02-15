/**
 * Created by kedar on 11/2/19.
 */
import {Component, OnInit} from '@angular/core';
import { HTTPService } from '../service/http.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  lineChartData: any[] = [];
  lastThreeYearsData: any[] = [];
  cityPopulationData: any[] = [];

  constructor( private httpService : HTTPService) { 
  }
  
  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.httpService.fetch("assets/jsondata/dashboardone.json").subscribe((resp: any) => {      
      this.lineChartData = resp.lineChartData;
      this.lastThreeYearsData = resp.lastThreeYearsData;
      this.cityPopulationData = resp.cityPopulationData;
    });
  }  

}


