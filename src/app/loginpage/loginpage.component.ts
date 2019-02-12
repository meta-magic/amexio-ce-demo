/**
 * Created by kedar on 11/2/19.
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { RoutingService } from '../routing-service';
@Component({
  selector: 'login-page',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor(private router: Router, public _routingService: RoutingService) {
  }
  ngOnInit() {
    debugger;
    this._routingService.showSideNav = false;
  }
  onGetStartedClick() {
    this.router.navigate(['/dashboard-one-demo']);
  }
}


