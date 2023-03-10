import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { Hotels, HotelsList } from '../cards-accomodation/hotels-list';
import { HotelsRecom, HotelsRecomList } from '../cards-recomended-hotels/hotels-recomend-list';

@Component({
  selector: 'app-accomodations',
  templateUrl: './accomodations.component.html',
  styleUrls: ['./accomodations.component.css']
})
export class AccomodationsComponent {  
  HotelList= Hotels;
  HotelsRecomList= HotelsRecom;
  searchTerm = '';

  isHovered = false;
  constructor() { }

   onMouseEnter(): void {
     this.isHovered = true;
   }

   onMouseLeave(): void {
     this.isHovered = false;
   }

   get getFilteredAccomodations(): HotelsList[] {
    return this.HotelList.filter((hotel) => hotel.name.toLocaleLowerCase()
    .includes(this.searchTerm.toLocaleLowerCase()));
  }
}
