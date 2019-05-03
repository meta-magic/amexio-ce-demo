import { Component, OnInit } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { HTTPService } from '../service/http.service';
import { ActivatedRoute } from '@angular/router';
import { debug } from 'util';

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
  newThemePath: string;
  flag: boolean;
  materialThemeArray:any;
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
    this.getTheThemesData();

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

  //////

  themeChange(theme: any) {
  let response:any;
  debugger;
  this.httpService.fetch('https://api.amexio.org/api/mda/'+theme.themeJSONFile).subscribe(data => {
    response = data;
  }, error => {
  }, () => {
    let themeColor = response.themeColor;
    let appColor = response.appColor;
    let compColor = response.compColor;
   themeColor.forEach((style:any) => {
     let value=style.value.replace(';','');
    document.documentElement.style.setProperty(style.key,value);
    
    });

    appColor.forEach((style:any) => {
      let value=style.value.replace(';','');
     document.documentElement.style.setProperty(style.key,value);
       
     });

     compColor.forEach((style:any) => {
      // let value=style.value.replace(';','');
     document.documentElement.style.setProperty(style.key,style.value);
       
     });


  });
  }

   //Window Open
   toggle() {
    this.flag = !this.flag;
  }







    getTheThemesData() {
      
      let amexioThemeRepsonse: any;
      let materialThemeResponse: any;
  
      //HTML FILE
      this.httpService.fetch('assets/theme/material.json').subscribe(data => {
        materialThemeResponse = data;
      }, error => {
      }, () => {
        this.materialThemeArray = materialThemeResponse;
      });
    }
}
