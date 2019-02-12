/**
 * Created by kedar on 11/2/19.
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { RoutingService } from '../routing-service';
@Component({
  selector: 'login',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor(private router: Router, public _routingService: RoutingService) {
  }
  ngOnInit() {
    this._routingService.showSideNav = false;
  }
  onLoginBtnClick() {
    this.router.navigate(['/home']);
  }
}


