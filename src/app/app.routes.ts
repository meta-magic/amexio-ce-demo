import {Routes} from '@angular/router';

import { LoginPageComponent } from './loginpage/loginpage.component';
export const CREATIVE_DEMO_ROUTE: Routes = [
  
    { path: '', redirectTo: '/login-page', pathMatch: 'full' },
   
    {
        path: 'login-page', component:LoginPageComponent,
    },
    {
        path: 'home-page', loadChildren: './homepage/homepage.module#HomeModule' ,
    },
];