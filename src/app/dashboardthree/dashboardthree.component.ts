import { Component } from "@angular/core";
import { HTTPService } from "../service/http.service";
import { AmexioGridLayoutService, GridConfig, GridConstants } from "amexio-ng-extensions";

@Component({
  selector: 'dashboard-three',
  templateUrl: './dashboardthree.component.html'
})
export class DashboardThreeComponent {

  gridDesktop: GridConfig;
  gridTablet: GridConfig;
  gridMobile: GridConfig;

  lastTenMonthRevenue: any[] = [];
  lastTenMonthUsers: any[] = [];
  globalVists: any[] = [];
  globalVistsData: any[] = [];

  constructor(private httpService: HTTPService, private _gridlayoutService: AmexioGridLayoutService) {
    this.createLayouts();

    // Create the Layouts
    this._gridlayoutService.createLayout(this.gridDesktop);
    this._gridlayoutService.createLayout(this.gridTablet);
    this._gridlayoutService.createLayout(this.gridMobile);


  }

  ngOnInit() {
    this.fetchData();
  }

  createLayouts() {
    this.gridDesktop = new GridConfig('Layout1', GridConstants.Desktop)
      .addlayout(["gridheader1", "gridheader2", "gridheader3", "gridheader4"])
      .addlayout(["label1", "label1", "label1", "label1"])
      .addlayout(["gridchart1", "gridchart1", "gridchart2", "gridchart2"])
      .addlayout(["label2", "label2", "label2", "label2"])
      .addlayout(["gridmap", "gridmap", "gridmap", "gridmap"])

    this.gridTablet = new GridConfig('Layout1', GridConstants.Tablet)
      .addlayout(["gridheader1", "gridheader1", "gridheader2", "gridheader2"])
      .addlayout(["gridheader3", "gridheader3", "gridheader4", "gridheader4"])
      .addlayout(["label1", "label1", "label1", "label1"])
      .addlayout(["gridchart1", "gridchart1", "gridchart2", "gridchart2"])
      .addlayout(["label2", "label2", "label2", "label2"])
      .addlayout(["gridmap", "gridmap", "gridmap", "gridmap"])


    this.gridMobile = new GridConfig('Layout1', GridConstants.Mobile)
      .addlayout(["gridheader1", "gridheader1", "gridheader1", "gridheader1"])
      .addlayout(["gridheader2", "gridheader2", "gridheader2", "gridheader2"])
      .addlayout(["gridheader3", "gridheader3", "gridheader3", "gridheader3"])
      .addlayout(["gridheader4", "gridheader4", "gridheader4", "gridheader4"])
      .addlayout(["label1", "label1", "label1", "label1"])
      .addlayout(["gridchart1", "gridchart1", "gridchart1", "gridchart1",])
      .addlayout(["gridchart2", "gridchart2", "gridchart2", "gridchart2",])
      .addlayout(["label2", "label2", "label2", "label2"])
      .addlayout(["gridmap", "gridmap", "gridmap", "gridmap",])
  }

  fetchData() {
    let response: any;
    this.httpService.fetch("assets/jsondata/dashboardthree.json").subscribe((resp: any) => {
      this.lastTenMonthRevenue = resp.lastTenMonthRevenue;
      this.lastTenMonthUsers = resp.lastTenMonthUsers;
      this.globalVists = resp.globalVists;
      this.globalVistsData = resp.globalVistsData;
    });
  }
}