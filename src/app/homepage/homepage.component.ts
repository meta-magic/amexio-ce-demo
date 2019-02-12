import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { RoutingService } from './routing-service';

@Component({
  selector: 'homepage-demo',
  templateUrl: './homepage.component.html',
  
})
export class HomeComponent implements OnInit {
  sideNavList: any; 
  constructor(private router: Router) {
  }
  ngOnInit() { 
  }

  dashboardOneClick() {
    this.router.navigate(['home-page/dashboard-page']);
  }
  // timeLineClick() {
  //   this.router.navigate(['home-page/dashboard-page']);
  // }
  userProfileClick() {
    this.router.navigate(['home-page/userprofile-page']);
  }


}
