/**
 * Created by kedar on 11/2/19.
 */
import { Component, OnInit } from '@angular/core';
import { HTTPService } from '../service/http.service';

@Component({
  selector: 'dashboard-two',
  templateUrl: './dashboardtwo.component.html',
  styleUrls: ['./dashboardtwo.component.css']
})
export class DashboardTWoComponent implements OnInit {

  tempData: any[];

  constructor(private httpService: HTTPService) {
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.httpService.fetch("assets/jsondata/temperature.json").subscribe((resp: any) => {
      this.tempData = resp;
    });
  }
}


