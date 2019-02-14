import { Component, OnInit } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
// import { RoutingService } from './routing-service';

@Component({
  selector: 'home-demo',
  templateUrl: './homepage.component.html',

})
export class HomeComponent implements OnInit {
  sideNavList: any;
  pageMenu: any;
  dashboardMenu: any;
  isRouteLoading: boolean = false;
  constructor(private router: Router) {
    this.dashboardMenu = [

      {
        "text": "Demo One",
        "icon": "fa fa-th-large",
        "mdaIcon": "link",
        "link": "home/dashboard"
      },
      {
        "text": "Demo Two",
        "icon": "fa fa-th-list",
        "mdaIcon": "link",
        "link": "home/dashboardtwo"
      },
      {
        "text": "Demo Three",
        "icon": "fa fa-table",
        "mdaIcon": "link",
        "link": "home/dashboardthree"
      }

    ];

    this.pageMenu =  [

      {
        "text": "User Profile",
        "icon": "fa fa-user",
        "mdaIcon": "link",
        "link": "home/userprofile"
      },
      {
        "text": "TimeLine",
        "icon": "fa fa-th-list",
        "mdaIcon": "link",
        "link": "home/iot-dashboard"
      },
      {
        "text": "Map",
        "icon": "fa fa-map",
        "mdaIcon": "link",
        "link": "home/iot-dashboard"
      }

    ];



  }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart) {
        this.isRouteLoading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.isRouteLoading = false;
      }
    });
  }

  onDashboardClick(node: any) {
    if (node.hasOwnProperty('link')) {
      this.router.navigate([node.link]);
    }
  }

  onPageClick(node: any) {
    if (node.hasOwnProperty('link')) {
      this.router.navigate([node.link]);
    }
  }
  iotDashboardClick() {

    this.router.navigate(['home/iot-dashboard']);

  }


}
