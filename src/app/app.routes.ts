import {Routes} from '@angular/router';

import { LoginPageComponent } from './loginpage/loginpage.component';
import { userProfileComponent } from './userprofile/userprofile.component';
export const CREATIVE_DEMO_ROUTE: Routes = [
  
    { path: '', redirectTo: '/login', pathMatch: 'full' },
   
    {
        path: 'login', component:LoginPageComponent,
    },
    {
        path: 'home', loadChildren: './homepage/homepage.module#HomeModule' ,
    },
];