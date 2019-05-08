/**
 * Created by pratik on 18/1/18.
 */
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'step-wizard-demo', templateUrl: './step-wizard.component.html'
})

export class StepWizardDemoComponent implements OnInit {

  userRegistration:UserRegistration;
  address:Address;
  payment:Payment;

  constructor() {
    this.userRegistration = new UserRegistration();
    this.address = new Address();
    this.payment= new Payment();
  }

  ngOnInit() {
  }

  finalStageClick(event:any) {

  }
}

export class UserRegistration {
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
  constructor() {
  }
}

export class Address {
  address1: string;
  pincode: string;
  constructor() {
  }
}

export class Payment {
  payment: string;
  constructor() {
  }
}