/**
 * Created by Ashwini on 07/03/19.
 */

import {Component} from '@angular/core';

@Component({
  selector: 'window-ce-demo', templateUrl: './window.component.html'
})
export class CreativeWindowDemo {
   showSideModal: boolean;
   showCenterModal:boolean;
   showLoginWindow:boolean;
   showInfoModal:boolean;
   showFrameWindow:boolean;
  constructor() {
     
}
  onSideModalClick(){
   this.showSideModal = !this.showSideModal;
  }
  showInfoModalClick(){
   this.showInfoModal = !this.showInfoModal;
  } 
  onloginWindowClick(){
   this.showLoginWindow = ! this.showLoginWindow;
  }
  onCenterModalClick(){
    this.showCenterModal = ! this.showCenterModal;
  }
  onFrameModalClick(){
   this.showFrameWindow =! this.showFrameWindow;
  }
} 

