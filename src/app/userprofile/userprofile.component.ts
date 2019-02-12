

import { Component, OnInit } from '@angular/core';
import { RoutingService} from '../routing-service';
@Component({
    selector: 'user-profile',
    templateUrl: './userprofile.component.html'
})

export class userProfileComponent implements OnInit {

    constructor(public _routingService : RoutingService)  { }


    ngOnInit() { }

}