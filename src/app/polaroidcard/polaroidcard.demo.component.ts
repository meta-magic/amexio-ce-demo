/**
 * Created by Ankita on 16/5/19.
 */

import {Component, OnInit} from '@angular/core'
import { HttpClient } from '@angular/common/http';

import { Router } from "@angular/router";
@Component({
  selector: 'polaroid-card-demo',
  templateUrl: './polaroidcard.demo.component.html'
})
export class PolaroidCardDemo implements OnInit{
 
  copyMsgArray: any[];
  flag: boolean;



  constructor(private http: HttpClient,public router: Router) {

    this.flag = true;
  }

  ngOnInit(): void {
  }

  
}


