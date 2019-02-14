import { Component } from "@angular/core";
import { GoogleMapOverlays } from 'amexio-ng-extensions';


@Component({
    selector: 'map-demo',
    templateUrl: './map.component.html'
})
export class MapComponent {


    data: GoogleMapOverlays[];

    constructor(){
        this.addLocation();
    }
   
    addLocation() {
        this.data = [];
        this.data.push(new GoogleMapOverlays(27.165440, 78.054520, 'Delhi, India', true, 'assets/images/location-logo.png', { country: 'India', capital: 'Delhi', }));
        this.data.push(new GoogleMapOverlays(51.494659, -0.049630, 'Beijing, China', true, 'assets/images/location-logo.png', { country: 'China', capital: 'Beijing' }));
        this.data.push(new GoogleMapOverlays(26.032820, -80.283752, 'Brasília, Brazil', true, 'assets/images/location-logo.png', { country: 'Brazil', capital: 'Brasília' }));
        this.data.push(new GoogleMapOverlays(-13.153600, -72.523903, 'Lima, Peru', true, 'assets/images/location-logo.png', { country: 'Peru', capital: 'Lima' }));
        this.data.push(new GoogleMapOverlays(20.962910, -89.578260, 'Mexico City, Mexico', true, 'assets/images/location-logo.png', { country: 'Mexico', capital: 'Mexico City' }));
        this.data.push(new GoogleMapOverlays(41.938961, 21.518950, 'Rome, Italy', true, 'assets/images/location-logo.png', { country: 'Italy', capital: 'Rome' }));
        this.data.push(new GoogleMapOverlays(30.283000, 35.451480, 'Amman, Jordan', true, 'assets/images/location-logo.png', { country: 'Jordan', capital: 'Amman', population: '11, Million' }));
    }
}