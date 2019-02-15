
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AmexioWidgetModule, AmexioChartsModule, AmexioDashBoardModule, AmexioEnterpriseModule, AmexioMapModule } from "amexio-ng-extensions";


import { RouterModule } from "@angular/router";
import { CREATIVE_DEMO_ROUTE } from "./app.routes";

import { LoginPageComponent } from './loginpage/loginpage.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTPService } from './service/http.service';

/**
 * Created by kedar on 11/2/19.
 */
@NgModule({
  declarations: [AppComponent, LoginPageComponent],
  imports: [BrowserModule,
    FormsModule, AmexioChartsModule, AmexioDashBoardModule, AmexioEnterpriseModule, AmexioMapModule,
    AmexioWidgetModule,
    HttpClientModule,
    RouterModule.forRoot(CREATIVE_DEMO_ROUTE, { useHash: true })],

  bootstrap: [AppComponent],
  providers: [HTTPService],

})
export class AppModule { }
