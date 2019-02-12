
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './homepage.component';
import { AmexioWidgetModule, AmexioChartsModule, AmexioDashBoardModule, AmexioEnterpriseModule, AmexioMapModule } from "amexio-ng-extensions";
import { RouterModule, Routes } from '@angular/router';

import { DashboardOneComponent } from '../dashboardone/dashboardone.component';
import { userProfileComponent } from '../userprofile/userprofile.component';

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
  imports: [CommonModule,
    FormsModule, AmexioChartsModule, AmexioDashBoardModule, AmexioEnterpriseModule, AmexioMapModule,
    AmexioWidgetModule,
    RouterModule.forChild(routes),
  ],

  bootstrap: [HomeComponent],
  providers: [],

})
export class HomeModule { }
