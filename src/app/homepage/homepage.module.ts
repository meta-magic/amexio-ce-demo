
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './homepage.component';
// tslint:disable-next-line:max-line-length
import { AmexioWidgetModule, AmexioChartsModule, AmexioDashBoardModule, AmexioEnterpriseModule,
   AmexioMapModule } from 'amexio-ng-extensions';
import { RouterModule, Routes } from '@angular/router';

import { DashboardOneComponent } from '../dashboardone/dashboardone.component';
import { userProfileComponent } from '../userprofile/userprofile.component';
import { AmexioChartD3Module } from 'amexio-chart-d3';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

/**
 * Created by kedar on 11/2/19.
 */


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard-page', component: DashboardOneComponent },
  { path: 'userprofile-page', component: userProfileComponent },
];


@NgModule({
  declarations: [HomeComponent, DashboardOneComponent, userProfileComponent],
  imports: [CommonModule, AmexioChartD3Module,
    FormsModule, AmexioChartsModule, AmexioDashBoardModule, AmexioEnterpriseModule, AmexioMapModule,
    AmexioWidgetModule, HttpClientModule,
    RouterModule.forChild(routes),
  ],
  providers: [],

})
export class HomeModule { }
