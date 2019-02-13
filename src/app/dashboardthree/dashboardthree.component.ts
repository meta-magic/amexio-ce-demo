import { Component } from "@angular/core";

@Component({
    selector : 'dashboard-three',
    templateUrl : './dashboardthree.component.html'
})
export class DashboardThreeComponent {

    lastTenMonth: any[];

    constructor(){
        this.lastTenMonth = [
            [{ "datatype": "number", "label": 'Month' }, { "datatype": "number", "label": 'Revenue' },
            ],
            ['JAN', 10],
            ['FEB', 30],
            ['MAR', 20],
            ['APR', 10],
            ['MAY', 30],
            ['JUN', 20],
            ['JUL', 20],
            ['AUG', 30],
            ['SEP', 40],
            ['OCT', 30],
            ['NOV', 30],
            ['DEC', 40],
            
          ];
    }
}