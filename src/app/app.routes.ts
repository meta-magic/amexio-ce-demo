import {Routes} from '@angular/router';

import { DashboardOneComponent } from './dashboardone/dashboardone.component';
import { LoginPageComponent } from './loginpage/loginpage.component';
import { userProfileComponent } from './userprofile/userprofile.component';

export const CREATIVE_DEMO_ROUTE: Routes = [
  
    { path: '', redirectTo: '/login-page', pathMatch: 'full' },
   
    {
        path: 'login-page', component:LoginPageComponent,
    },
    {
        path: 'dashboard-one-demo', component:DashboardOneComponent,
    },
    {
        path: 'user-profile', component:userProfileComponent,
    },

];