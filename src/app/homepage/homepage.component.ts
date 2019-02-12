import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { RoutingService } from './routing-service';

@Component({
  selector: 'home-demo',
  templateUrl: './homepage.component.html',
  
})
export class HomeComponent implements OnInit {
  sideNavList: any; 
  constructor(private router: Router) {
  }
  ngOnInit() { 
  }

  dashboardOneClick() {
    this.router.navigate(['home/dashboard']);
  }
  // timeLineClick() {
  //   this.router.navigate(['home/dashboard']);
  // }
  userProfileClick() {
    this.router.navigate(['home/userprofile']);
  }
  iotDashboardClick() {
    
    this.router.navigate(['home/iot-dashboard']);

  }


}
