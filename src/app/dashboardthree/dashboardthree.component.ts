import { Component } from "@angular/core";
import { HTTPService } from "../service/http.service";

@Component({
  selector: 'dashboard-three',
  templateUrl: './dashboardthree.component.html'
})
export class DashboardThreeComponent {

  lastTenMonthRevenue: any[] = [];
  lastTenMonthUsers: any[] = [];
  globalVists: any[] = [];
  globalVistsData: any[] = [];

  constructor(private httpService: HTTPService) {
  }

  ngOnInit() {
    this.fetchData();
  }


  fetchData() {
    let response: any;
    this.httpService.fetch("assets/jsondata/dashboardthree.json").subscribe((resp: any) => {
      debugger;
      this.lastTenMonthRevenue = resp.lastTenMonthRevenue;
      this.lastTenMonthUsers = resp.lastTenMonthUsers;
      this.globalVists = resp.globalVists;
      this.globalVistsData = resp.globalVistsData;
    });
  }
}