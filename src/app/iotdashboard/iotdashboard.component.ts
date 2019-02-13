/**
 * Created by kedar on 11/2/19.
 */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'dashboard',
  templateUrl: './iotdashboard.component.html',
  styleUrls: ['./iotdashboard.component.css']
})
export class IOTDashboardComponent implements OnInit {
  lineChartData: any;
  arrayData: any;
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
    ]

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


