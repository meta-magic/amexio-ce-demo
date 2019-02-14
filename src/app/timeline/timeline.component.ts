import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
    selector : 'time-line',
    templateUrl : './timeline.component.html'
})
export class TimelineComponent implements OnInit{

    constructor(public http: HttpClient) {} 
    timeLineData: any;

    ngOnInit() {
        this.http.get('assets/jsondata/timeline.json')
        .subscribe(response => {
            this.timeLineData= response;
            console.log('kedar', this.timeLineData);
        });
    }
}