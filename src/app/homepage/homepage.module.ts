
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
import { DashboardThreeComponent } from '../dashboardthree/dashboardthree.component';
import { DashboardTWoComponent } from '../dashboardtwo/dashboardtwo.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { MapComponent } from '../map/map.component';
import {AmexioFloatingPanelComponent} from '../floatingpanel/floatingpanel.component';

/**
 * Created by kedar on 11/2/19.
 */

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'dashboardthree', component: DashboardThreeComponent },
      { path: 'userprofile', component: userProfileComponent },
      { path: 'dashboardtwo', component: DashboardTWoComponent },
      { path: 'timeline', component: TimelineComponent },
      { path: 'map', component: MapComponent },
    ]
  },
];

@NgModule({
  declarations: [HomeComponent, TimelineComponent, AmexioFloatingPanelComponent, MapComponent, DashboardComponent, userProfileComponent, DashboardTWoComponent, DashboardThreeComponent],
  imports: [CommonModule,
    FormsModule, AmexioChartD3Module, AmexioChartsModule, AmexioDashBoardModule, AmexioEnterpriseModule, AmexioMapModule,
    AmexioWidgetModule, HttpClientModule,
    RouterModule.forChild(routes),
  ],
  bootstrap: [HomeComponent],
  providers: [],
})
export class HomeModule { }
