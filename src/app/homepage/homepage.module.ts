
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './homepage.component';
import {
  AmexioWidgetModule, AmexioChartsModule, AmexioDashBoardModule, AmexioEnterpriseModule,
  AmexioMapModule
} from 'amexio-ng-extensions';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { userProfileComponent } from '../userprofile/userprofile.component';
import { AmexioChartD3Module } from 'amexio-chart-d3';
import { HttpClientModule } from '@angular/common/http';
import { IOTDashboardComponent } from '../iotdashboard/iotdashboard.component';
import { DashboardThreeComponent } from '../dashboardthree/dashboardthree.component';

/**
 * Created by kedar on 11/2/19.
 */

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'dashboardthree', component: DashboardThreeComponent },
      { path: 'userprofile', component: userProfileComponent },
      { path: 'iot-dashboard', component: IOTDashboardComponent },
    ]
  },
];

@NgModule({
  declarations: [HomeComponent, DashboardComponent, userProfileComponent, IOTDashboardComponent, DashboardThreeComponent],
  imports: [CommonModule,
    FormsModule, AmexioChartD3Module, AmexioChartsModule, AmexioDashBoardModule, AmexioEnterpriseModule, AmexioMapModule,
    AmexioWidgetModule, HttpClientModule,
    RouterModule.forChild(routes),
  ],
  bootstrap: [HomeComponent],
  providers: [],
})
export class HomeModule { }
