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
    this.gridDesktop = new GridConfig('Layout11', GridConstants.Desktop)
      .addlayout(["gridheader1", "gridheader1", "gridheader1", "gridheader1"])
      .addlayout(["gridleft1", "gridmenu11", "gridmenu11", "gridright11"])
      .addlayout(["gridleft1", "gridmenu21", "gridmenu31", "gridright21"])
      .addlayout(["gridleft1", "gridmenu41", "gridmenu41", "gridright31"])
      .addlayout(["gridleft1", "gridmenu41", "gridmenu41", "gridright41"]);

      this.gridTablet = new GridConfig('Layout11', GridConstants.Tablet)
      .addlayout(["gridheader1", "gridheader1", "gridheader1", "gridheader1", "gridheader1"])
      .addlayout(["gridleft1", "gridmenu11", "gridmenu11", "gridmenu11", "gridmenu11"])
      .addlayout(["gridright11", "gridmenu21", "gridmenu21", "gridmenu31", "gridmenu31"])
      .addlayout(["gridright11", "gridmenu41", "gridmenu41", "gridmenu41", "gridmenu41"])
      .addlayout(["gridright21", "gridmenu41", "gridmenu41", "gridmenu41", "gridmenu41"])
      .addlayout(["gridright31", "gridmenu41", "gridmenu41", "gridmenu41", "gridmenu41"])
      .addlayout(["gridright41", "gridmenu41", "gridmenu41", "gridmenu41", "gridmenu41"]);

      this.gridMobile = new GridConfig('Layout11', GridConstants.Mobile)
      .addlayout(["gridheader1", "gridheader1", "gridheader1", "gridheader1"])
      .addlayout(["gridmenu11", "gridmenu11", "gridmenu11", "gridmenu11"])
      .addlayout(["gridmenu21", "gridmenu21", "gridmenu21", "gridmenu21"])
      .addlayout(["gridmenu31", "gridmenu31", "gridmenu31", "gridmenu31"])
      .addlayout(["gridmenu41", "gridmenu41", "gridmenu41", "gridmenu41"])
      .addlayout(["gridleft1", "gridleft1", "gridleft1", "gridleft1"])
      .addlayout(["gridright11", "gridright11", "gridright11", "gridright11"])
      .addlayout(["gridright21", "gridright21", "gridright21", "gridright21"])
      .addlayout(["gridright31", "gridright31", "gridright31", "gridright31"])
      .addlayout(["gridright41", "gridright41", "gridright41", "gridright41"]);
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

