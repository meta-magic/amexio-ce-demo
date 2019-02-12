
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './homepage.component';
import { AmexioWidgetModule, AmexioChartsModule, AmexioDashBoardModule, AmexioEnterpriseModule, AmexioMapModule } from "amexio-ng-extensions";
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { userProfileComponent } from '../userprofile/userprofile.component';

/**
 * Created by kedar on 11/2/19.
 */

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'userprofile', component: userProfileComponent },
];

@NgModule({
  declarations: [HomeComponent, DashboardComponent, userProfileComponent],
  imports: [CommonModule,
    FormsModule, AmexioChartsModule, AmexioDashBoardModule, AmexioEnterpriseModule, AmexioMapModule,
    AmexioWidgetModule,
    RouterModule.forChild(routes),
  ],
  bootstrap: [HomeComponent],
  providers: [],
})
export class HomeModule { }
