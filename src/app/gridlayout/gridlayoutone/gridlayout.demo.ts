/**
 * Created by rashmi on 2/1/18.
 */

import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AmexioGridLayoutService } from "amexio-ng-extensions";
import { GridConstants } from 'amexio-ng-extensions';
import { GridConfig } from 'amexio-ng-extensions';

// import { ComponentDataStructure } from '../../../apimetadata/models/component.structure';


@Component({
  selector: 'gridlayout', templateUrl: 'gridlayout.demo.html'
})
export class GridLayoutDemoOne  implements OnInit{
 
  copyMsgArray: any[];
  selectedData: any;
  data: any[];
  gridDesktop: GridConfig;
  gridTablet: GridConfig;
  gridMobile: GridConfig; 

  // customSourceData: ComponentDataStructure;

  constructor(private http: HttpClient, private _gridlayoutService: AmexioGridLayoutService) {
    
    // this.customSourceData = new ComponentDataStructure();
    this.createLayouts();
    this._gridlayoutService.createLayout(this.gridDesktop);
    this._gridlayoutService.createLayout(this.gridTablet);
    this._gridlayoutService.createLayout(this.gridMobile);
  }


  ngOnInit(): void {
    // this.createCustomSourceData();
  }
  // createCustomSourceData() {
  //   this.customSourceData.title = 'Grid Layout';
  //   this.customSourceData.description = 'CSS Grid Layout is the most powerful layout system available in CSS. It is a 2-dimensional system, meaning it can handle both columns and rows. Grid Layout can be used by applying CSS rules both to a parent element (which becomes the Grid Container) and to that elements children (which become Grid Items).';
  //   this.customSourceData.sourceMetadata.htmlUrl = 'data/gridlayout/gridlayoutexp1.html';
  //   this.customSourceData.sourceMetadata.tsUrl = 'data/gridlayout/gridlayoutexp1.text';
  //   this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-gridlayoutone?embed=1&file=app/layouts/gridlayout/gridlayoutone/gridlayout.demo.html&view=editor';
  // }

  createLayouts() {
    this.gridDesktop = new GridConfig('Layout1', GridConstants.Desktop)
      .addlayout(["gridheader", "gridheader", "gridheader", "gridheader"])
      .addlayout(["gridleft", "gridmenu1", "gridmenu1", "gridright1"])
      .addlayout(["gridleft", "gridmenu2", "gridmenu3", "gridright2"])
      .addlayout(["gridleft", "gridmenu4", "gridmenu4", "gridright3"])
      .addlayout(["gridleft", "gridmenu4", "gridmenu4", "gridright4"]);

      this.gridTablet = new GridConfig('Layout1', GridConstants.Tablet)
      .addlayout(["gridheader", "gridheader", "gridheader", "gridheader", "gridheader"])
      .addlayout(["gridleft", "gridmenu1", "gridmenu1", "gridmenu1", "gridmenu1"])
      .addlayout(["gridright1", "gridmenu2", "gridmenu2", "gridmenu3", "gridmenu3"])
      .addlayout(["gridright1", "gridmenu4", "gridmenu4", "gridmenu4", "gridmenu4"])
      .addlayout(["gridright2", "gridmenu4", "gridmenu4", "gridmenu4", "gridmenu4"])
      .addlayout(["gridright3", "gridmenu4", "gridmenu4", "gridmenu4", "gridmenu4"])
      .addlayout(["gridright4", "gridmenu4", "gridmenu4", "gridmenu4", "gridmenu4"]);

      this.gridMobile = new GridConfig('Layout1', GridConstants.Mobile)
      .addlayout(["gridheader", "gridheader", "gridheader", "gridheader"])
      .addlayout(["gridmenu1", "gridmenu1", "gridmenu1", "gridmenu1"])
      .addlayout(["gridmenu2", "gridmenu2", "gridmenu2", "gridmenu2"])
      .addlayout(["gridmenu3", "gridmenu3", "gridmenu3", "gridmenu3"])
      .addlayout(["gridmenu4", "gridmenu4", "gridmenu4", "gridmenu4"])
      .addlayout(["gridleft", "gridleft", "gridleft", "gridleft"])
      .addlayout(["gridright1", "gridright1", "gridright1", "gridright1"])
      .addlayout(["gridright2", "gridright2", "gridright2", "gridright2"])
      .addlayout(["gridright3", "gridright3", "gridright3", "gridright3"])
      .addlayout(["gridright4", "gridright4", "gridright4", "gridright4"]);
  }
  
  //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
  onCopyClick() {
    if (this.copyMsgArray.length >= 1) {
      this.copyMsgArray = [];
      this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
    } else {
      this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
    }
  }

  onRowSelect(data: any) {
    this.selectedData = data;
  }
}

