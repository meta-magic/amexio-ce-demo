/**
 * Created by rashmi on 03/05/19.
 */
/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Rashmi Thakkar
 *
 */
import {Component, EventEmitter, Input, OnInit, Output, Inject, ElementRef} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'amexio-floating-panel', 
  templateUrl: './floatingpanel.component.html'
})

export class AmexioFloatingPanelComponent implements OnInit {

  @Input('position-top') top : string;

  @Input('position-bottom') bottom : string;

  @Input('position-left') left : string;

  @Input('position-right') right : string;

  _event : any;

  get event(): any {
    return this._event;
  }

  @Input('event')
  set setEvent(value: any) {
    this._event = value;
    this.adjustPosition();
  }

  @Input('show') show : boolean = true;

  constructor(@Inject(DOCUMENT) private document: any, private elementRef : ElementRef){

  }

  ngOnInit() {
    
  }

  adjustPosition(){
      let cr = this.event.currentTarget.getBoundingClientRect();
      let x = cr.x;
      let y = cr.y;

      let wwidth = window.innerWidth;
      let wheight = window.innerHeight;
      this.top = null;
      this.bottom = null;
      this.left = null;
      this.right = null;

      if((wwidth - x)<100){
        console.log("position at right");
        this.right="5px";
      }else{
        console.log("position at left");
        this.left=(x+cr.width)+"px";
       
      }

      if((wheight-y)<100){
        this.bottom = "100px";
      }else{
        this.top  = (y+cr.height) +"px";
      }
  }
  
}
