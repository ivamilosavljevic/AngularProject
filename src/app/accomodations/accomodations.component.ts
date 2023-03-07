import { Component } from '@angular/core';
import { Hotels, HotelsList } from '../cards-accomodation/hotels-list';

@Component({
  selector: 'app-accomodations',
  templateUrl: './accomodations.component.html',
  styleUrls: ['./accomodations.component.css']
})
export class AccomodationsComponent {

  
  HotelList= Hotels;

}
