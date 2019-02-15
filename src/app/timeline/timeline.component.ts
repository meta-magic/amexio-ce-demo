import { Component, OnInit } from "@angular/core";
import { HTTPService } from "../service/http.service";

@Component({
    selector: 'time-line',
    templateUrl: './timeline.component.html'
})
export class TimelineComponent implements OnInit {

    timeLineData: any;

    constructor(public http: HTTPService) { }

    ngOnInit() {
        this.http.fetch('assets/jsondata/timeline.json')
            .subscribe(response => {
                this.timeLineData = response;
            });
    }
}