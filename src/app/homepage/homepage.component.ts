import { Component, OnInit } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { HTTPService } from '../service/http.service';

@Component({
  selector: 'home-demo',
  templateUrl: './homepage.component.html',

})
export class HomeComponent implements OnInit {

  sideNavList: any;
  pageMenu: any;
  dashboardMenu: any;
  isRouteLoading: boolean = false;

  constructor(private router: Router, private httpService: HTTPService) {
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart) {
        this.isRouteLoading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.isRouteLoading = false;
      }
    });
    this.fetchData();
  }

  fetchData() {
    this.httpService.fetch("assets/jsondata/sidenav.json").subscribe((resp: any) => {
      this.dashboardMenu = resp.dashboard;
      this.pageMenu = resp.userprofile;
    });
  }

  onMenuClick(node: any) {
    if (node.hasOwnProperty('link')) {
      this.router.navigate([node.link]);
    }
  }

  logout(event: any) {
    this.router.navigate(['login']);
  }

  navigateToGithub(event: any) {
    window.open('https://github.com/meta-magic/amexio-ce-demo', '_blank');
  }
}
