import { Component, Input } from '@angular/core';
import { HotelsList } from './hotels-list';


@Component({
  selector: 'app-cards-accomodation',
  templateUrl: './cards-accomodation.component.html',
  styleUrls: ['./cards-accomodation.component.css']
})
export class CardsAccomodationComponent {

  @Input() Hotel!: HotelsList;
}
