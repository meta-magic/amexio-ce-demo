import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingService } from './routing-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public _routingService: RoutingService) {
  
  }
  ngOnInit() { 
  }

  onNodeClick(data: any) {
  }

}
