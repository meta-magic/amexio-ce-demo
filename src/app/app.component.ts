import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingService } from './routing-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sideNavList: any; 
  constructor(public _routingService: RoutingService) {
    this.sideNavList = {
      "data":[
        {
          "text": "Home",
          "icon" : "fa fa-home fa-fw",
          "mdaIcon" : "home",
          "link" : "/home/dashboard",
          "selected":true,
          "badge": "12"
        },
        {
          "text": "Email",
          "icon" : "fa fa-envelope fa-fw",
          "mdaIcon" : "email",
          "link" : "/home/email",
          "badge": "21"
        }
      ]
    }
  }
  ngOnInit() { 
    this._routingService.showSideNav = true;
  }

  onNodeClick(data: any) {
  }

}
