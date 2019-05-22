/**
 * Created by sagar on 2/8/17.
 */

import { Component, OnInit } from '@angular/core';
import { AmexioGridLayoutService } from "amexio-ng-extensions";
import { GridConstants } from 'amexio-ng-extensions';
import { GridConfig } from 'amexio-ng-extensions';
@Component({
  selector: 'email-demo',
  templateUrl: 'email.html'
})

export class EmailComponent implements OnInit {
  isComposeOpen: boolean;
  bindData: any;
  accordianScheduleData: any;
  accordianTodoData: any;
  data: any;
  isVisible: boolean;
  gridDesktop: GridConfig;
  gridTablet: GridConfig;
  gridMobile: GridConfig;
  constructor(private _gridlayoutService: AmexioGridLayoutService) {
    this.isComposeOpen = false;
    this.createLayouts();
    this._gridlayoutService.createLayout(this.gridDesktop);
    this._gridlayoutService.createLayout(this.gridTablet);
    this._gridlayoutService.createLayout(this.gridMobile);

    this.bindData = {
      "data": [
        {
          "name": "Ketan Gote",
          "name_official": "Ketan Gote",
          "profile": "ketan.jpg"
        },
        {
          "name": "Ashwini agre",
          "name_official": "Ashwini agre",
          "profile": "ashwini.jpg"
        },
        {
          "name": "Dattaram Gawas",
          "name_official": "Dattaram Gawas",
          "profile": "dats.jpg"
        },
        {
          "name": "Sagar Jadhav",
          "name_official": "Sagar Jadhav",
          "profile": "sagar.jpg"
        },
        {
          "name": "Deepali Arvind",
          "name_official": "Deepali Arvind",
          "profile": "dipali.jpg"
        },
        {
          "name": "Rashmi Thakkar",
          "name_official": "Rashmi Thakkar",
          "profile": "rashmi.jpg"
        }
      ]
    };
    this.isVisible = false;
    this.accordianScheduleData = [
      {
        "task": "Kubernetes Workshop",
        "start": "11:00:00",
        "end": "2019-03-02T14:00:00"
      },
      {
        "task": "Microservice Workshop",
        "start": "1:00:00",
        "end": "2019-03-03T06:00:00"
      },
      {
        "task": "Docker Workshop",
        "start": "3:00:00",
        "end": "2019-03-09"
      },
      {
        "task": "Amexio Meetup",
        "start": "5:00:00",
        "end": "2019-03-12"
      },
      {
        "task": "Angular Event",
        "start": "6:00:00",
        "end": "2019-03-14"
      }

    ]
    this.accordianTodoData = [
      {
        "task": "Microservice Workshop Setup"
      },
      {
        "task": "Presentation Upgradation"
      },
      {
        "task": "Amexio Release Plan"
      },
      {
        "task": "Migration Plan"
      }
    ]

  }
  createLayouts() {
    this.gridDesktop = new GridConfig('emailLayout', GridConstants.Desktop)
      .addlayout(["gridheaderemail", "gridheaderemail1", "gridheaderemail1", "gridheaderemail1", "gridheaderemail2"])
      .addlayout(["gridheaderemail", "gridheaderemail1", "gridheaderemail1", "gridheaderemail1", "gridheaderemail2"])
      .addlayout(["gridheaderemail", "gridheaderemail1", "gridheaderemail1", "gridheaderemail1", "gridheaderemail2"])

      this.gridTablet = new GridConfig('emailLayout', GridConstants.Tablet)
      .addlayout(["gridheaderemail", "gridheaderemail1", "gridheaderemail1", "gridheaderemail1", "gridheaderemail2"])
      .addlayout(["gridheaderemail", "gridheaderemail1", "gridheaderemail1", "gridheaderemail1", "gridheaderemail2"])
      .addlayout(["gridheaderemail", "gridheaderemail1", "gridheaderemail1", "gridheaderemail1", "gridheaderemail2"])


      this.gridMobile = new GridConfig('emailLayout', GridConstants.Mobile)
      .addlayout(["gridheaderemail", "gridheaderemail1", "gridheaderemail1", "gridheaderemail1", "gridheaderemail2"])
      .addlayout(["gridheaderemail", "gridheaderemail1", "gridheaderemail1", "gridheaderemail1", "gridheaderemail2"])
      .addlayout(["gridheaderemail", "gridheaderemail1", "gridheaderemail1", "gridheaderemail1", "gridheaderemail2"])

  }
  onRowSelect(event: any) {
    if (event.length > 0) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }

  }
  onRowClick(event: any) {

  }
  toggle() {
    this.isComposeOpen = !this.isComposeOpen;
  }
  ngOnInit() {

    this.data = [
      {
        "text": "Inbox",
        "expanded": false,
        "checked": false,
        "selected": true,
        "icon": "fa fa-inbox"
      }, {
        "text": "Sent",
        "expanded": false,
        "checked": false,
        "icon": "fa fa-envelope-o"
      }, {
        "text": "Trash",
        "expanded": false,
        "checked": false,
        "icon": "fa fa-trash-o"
      },
      {
        "text": "Labels",
        "expanded": false,
        "checked": false,
        "icon": "fa fa-tag",
        "children": [
          {
            "text": "High",
            "expanded": false,
            "checked": false,
            "icon": "fa fa-tag fa-lg"
          }, {
            "text": "Medium",
            "expanded": false,
            "checked": false,
            "icon": "fa fa-tag fa-md"
          }, {
            "text": "Low",
            "expanded": false,
            "checked": false,
            "icon": "fa fa-tag "
          }
        ]
      }
    ]

  }
}
