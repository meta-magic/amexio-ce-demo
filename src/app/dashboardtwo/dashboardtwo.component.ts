/**
 * Created by kedar on 11/2/19.
 */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'dashboard-two',
  templateUrl: './dashboardtwo.component.html',
  styleUrls: ['./dashboardtwo.component.css']
})
export class DashboardTWoComponent implements OnInit {
  lineChartData: any;
  arrayData: any;
  tempData : any[];
  constructor(private http:HttpClient) {
    this.lineChartData = [
      [{ "datatype": "number", "label": 'Day' }, { "datatype": "number", "label": 'Guardians of the Galaxy' },
      ],
      [1, 37.8],
      [2, 30.9 ],
      [3, 25.4],
      [4, 11.7],
      [5, 11.9],
      [6, 8.8],
      [7, 7.6],
      [8, 12.3],
      [9, 16.9],
      [10, 12.8],
      [11, 5.3],
      [12, 6.6],
      [13, 4.8],
      [14, 4.2]
    ];

    this.tempData = [
      ["date", "Temp"],
      ["06:00", 14],
      ["07:00", 15],
      ["08:00", 17],
      ["09:00", 18],
      ["10:00", 19],
      ["11:00", 20],
      ["12:00", 21],
      ["13:00", 24],
      ["14:00", 23],
      ["15:00", 20],
      ["16:00", 20]
 ]; 

  }
  ngOnInit() {
    let data: any;
    this.http.get('assets/jsondata/iotdashboard.json')
    .subscribe(response => {
    data = response;
    },
    (err) => {},
    () => {
   this.arrayData= data.Data;
    });
  }

}


