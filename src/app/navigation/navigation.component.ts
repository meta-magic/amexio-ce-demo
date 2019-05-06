import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: 'navigation.html'
})

export class NavigationComponent implements OnInit {
  flag : boolean;
  bindData : any;
  data:any;
  isVisible:boolean;
  constructor() {
  }
  ngOnInit() {

  }
}
