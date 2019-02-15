/**
 * Created by kedar on 11/2/19.
 */
import { Component, OnInit } from '@angular/core';
import { HTTPService } from '../service/http.service';
import { AmexioGridLayoutService, GridConfig, GridConstants } from "amexio-ng-extensions";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {



  gridDesktop: GridConfig;
  gridTablet: GridConfig;
  gridMobile: GridConfig;


  chartGridDesktop: GridConfig;
  chartGridTablet: GridConfig;
  chartGridMobile: GridConfig;

  lineChartData: any[] = [];
  lastThreeYearsData: any[] = [];
  cityPopulationData: any[] = [];

  constructor(private httpService: HTTPService, private _gridlayoutService: AmexioGridLayoutService) {
    this.createLayouts();

    // Create the Layouts
    this._gridlayoutService.createLayout(this.gridDesktop);
    this._gridlayoutService.createLayout(this.gridTablet);
    this._gridlayoutService.createLayout(this.gridMobile);


    this._gridlayoutService.createLayout(this.chartGridDesktop);
    this._gridlayoutService.createLayout(this.chartGridTablet);
    this._gridlayoutService.createLayout(this.chartGridMobile);
  }


  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.httpService.fetch("assets/jsondata/dashboardone.json").subscribe((resp: any) => {
      this.lineChartData = resp.lineChartData;
      this.lastThreeYearsData = resp.lastThreeYearsData;
      this.cityPopulationData = resp.cityPopulationData;
    });
  }

  createLayouts() {
    this.gridDesktop = new GridConfig('Layout1', GridConstants.Desktop)
      .addlayout(["gridheader1", "gridheader2", "gridheader3", "gridheader4"]);

    this.gridTablet = new GridConfig('Layout1', GridConstants.Tablet)
      .addlayout(["gridheader1", "gridheader1", "gridheader2", "gridheader2"])
      .addlayout(["gridheader3", "gridheader3", "gridheader4", "gridheader4"]);


    this.gridMobile = new GridConfig('Layout1', GridConstants.Mobile)
      .addlayout(["gridheader1", "gridheader1", "gridheader1", "gridheader1"])
      .addlayout(["gridheader2", "gridheader2", "gridheader2", "gridheader2"])
      .addlayout(["gridheader3", "gridheader3", "gridheader3", "gridheader3"])
      .addlayout(["gridheader4", "gridheader4", "gridheader4", "gridheader4"])


    this.chartGridDesktop = new GridConfig('chartLayout', GridConstants.Desktop)
      .addlayout(["gridchart1", "gridchart1", "gridchart2", "gridchart2", "gridchart3", "gridchart3"])
      .addlayout(["datagrid1", "datagrid1", "datagrid1", "datagrid2", "datagrid2", "datagrid2"])

    this.chartGridTablet = new GridConfig('chartLayout', GridConstants.Tablet)
      .addlayout(["gridchart1", "gridchart1", "gridchart1", "gridchart2", "gridchart2", "gridchart2"])
      .addlayout(["gridchart3", "gridchart3", "gridchart3", "gridchart3", "gridchart3", "gridchart3",])
      .addlayout(["datagrid1", "datagrid1", "datagrid1", "datagrid2", "datagrid2", "datagrid2"])


    this.chartGridMobile = new GridConfig('chartLayout', GridConstants.Mobile)
      .addlayout(["gridchart1", "gridchart1", "gridchart1", "gridchart1", "gridchart1", "gridchart1",])

      .addlayout(["gridchart2", "gridchart2", "gridchart2", "gridchart2", "gridchart2", "gridchart2",])

      .addlayout(["gridchart3", "gridchart3", "gridchart3", "gridchart3", "gridchart3", "gridchart3",])
      .addlayout(["datagrid1", "datagrid1", "datagrid1", "datagrid1", "datagrid1", "datagrid1",])
      .addlayout(["datagrid2", "datagrid2", "datagrid2", "datagrid2", "datagrid2", "datagrid2",]);




  }

}



