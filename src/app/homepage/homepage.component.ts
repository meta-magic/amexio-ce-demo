import { Component, OnInit } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { HTTPService } from '../service/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'home-demo',
  templateUrl: './homepage.component.html',

})
export class HomeComponent implements OnInit {

  sideNavList: any;
  pageMenu: any;
  dashboardMenu: any;
  isRouteLoading: boolean = false;
  homePageType = '1';
  newTheme: string;
  constructor(private router: Router, private httpService: HTTPService, private rt: ActivatedRoute) {
  }

  ngOnInit() {
    this.rt.queryParamMap.subscribe((paramsObject: any) => {
      if (paramsObject && paramsObject.params) {
        this.homePageType = paramsObject.params.type;
      }
   });
   if (this.homePageType === '2') {
     this.newTheme = 'assets/theme/at-md-pumpkin-fire.css'
     this.addNewTheme(this.newTheme);
   }
   if (!this.homePageType) {
    this.homePageType = '1';
   }
    this.router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart) {
        this.isRouteLoading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.isRouteLoading = false;
      }
    });
    this.fetchData();

  }

  addNewTheme(newTheme: any) {
    let linkEl = document.createElement('link');
    linkEl.onload = () => {
    };
    linkEl.setAttribute('rel', 'stylesheet');
    linkEl.id = 'themeid';
    linkEl.href = newTheme;
    document.head.appendChild(linkEl);
  }



  fetchData() {
    this.httpService.fetch("assets/jsondata/sidenav.json").subscribe((resp: any) => {
      this.dashboardMenu = resp.dashboard;
      this.pageMenu = resp.userprofile;
    });
  }

  onMenuClick(node: any) {
    if (node && node.hasOwnProperty('link')) {
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
