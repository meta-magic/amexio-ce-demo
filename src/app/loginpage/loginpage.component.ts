/**
 * Created by kedar on 11/2/19.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { debug } from 'util';

@Component({
  selector: 'login',
  templateUrl: './loginpage.component.html'
})
export class LoginPageComponent implements OnInit {
  type = '1';
  constructor(private router: Router, private rt: ActivatedRoute) {
  }

  ngOnInit() {
    this.rt.queryParamMap.subscribe((params: any) => {
      if (params && params.params) {
        this.type = params.params.type;
      }
   });
  }

  onLoginBtnClick() {
    this.router.navigate(['/home'], { queryParams: { type: this.type } });
  }
}


