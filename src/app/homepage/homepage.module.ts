
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
import { AmexioFloatingPanelComponent } from '../floatingpanel/floatingpanel.component';
import { DataGridComponent } from '../data/data.component';
import { TemplatesGridComponent } from '../templates/templates.component';
import { ActionComponent } from '../action/action';
import { GroupbyIssueComponent } from '../report/groupbyissue/groupbyissue.component';
import { IssueComponent } from '../report/issue/issue.component';
import { ProfileComponent } from '../profile/profile.component';
import { EmailComponent } from '../email/email.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { CalendarDemoComponent } from '../calendar/calendar.component';
import { CreativeWindowDemo } from '../windows/window.component';
import { GridLayoutDemoOne } from '../gridlayout/gridlayoutone/gridlayout.demo';
import { CreativeCircularProgressBarDemo } from '../progressce/progressce.component';
import { StepWizardDemoComponent } from '../steps-wizard/step-wizard.component';
import { PolaroidCardDemo } from '../polaroidcard/polaroidcard.demo.component';
import {CreativeCardDemo } from '../cardce/card.demo';
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
      { path: 'datagrid', component: DataGridComponent },
      { path: 'template', component: TemplatesGridComponent },
      { path: 'action', component: ActionComponent },
      { path: 'group-by-issue', component: GroupbyIssueComponent },
      { path: 'issue', component: IssueComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'email', component: EmailComponent },
      { path: 'navigation', component: NavigationComponent },
      { path: 'calender', component: CalendarDemoComponent },
      { path: 'window-ce-demo', component: CreativeWindowDemo },
      { path: 'gridlayout', component: GridLayoutDemoOne },
      { path: 'progress-ce-demo', component: CreativeCircularProgressBarDemo },
      { path: 'step-wizard-demo', component: StepWizardDemoComponent },
      { path: 'polaroid-card-demo',component:PolaroidCardDemo},
      { path:'card-ce-demo', component:CreativeCardDemo}


    ]
  },
];

@NgModule({
  declarations: [HomeComponent, TimelineComponent, AmexioFloatingPanelComponent, MapComponent, DashboardComponent,
    userProfileComponent, DashboardTWoComponent, DashboardThreeComponent,
    DataGridComponent, TemplatesGridComponent, ActionComponent, GroupbyIssueComponent, IssueComponent,
    ProfileComponent, EmailComponent, NavigationComponent, CalendarDemoComponent, CreativeWindowDemo, GridLayoutDemoOne,
    CreativeCircularProgressBarDemo,StepWizardDemoComponent,PolaroidCardDemo,CreativeCardDemo
  ],
  imports: [CommonModule,
    FormsModule, AmexioChartD3Module, AmexioChartsModule, AmexioDashBoardModule, AmexioEnterpriseModule, AmexioMapModule,
    AmexioWidgetModule, HttpClientModule,
    RouterModule.forChild(routes),
  ],
  bootstrap: [HomeComponent],
  providers: [],
})
export class HomeModule { }
