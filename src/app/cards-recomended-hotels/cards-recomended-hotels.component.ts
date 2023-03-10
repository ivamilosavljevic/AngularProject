import { Component, Input } from '@angular/core';
import { HotelsRecomList } from './hotels-recomend-list';

@Component({
  selector: 'app-cards-recomended-hotels',
  templateUrl: './cards-recomended-hotels.component.html',
  styleUrls: ['./cards-recomended-hotels.component.css']
})
export class CardsRecomendedHotelsComponent {

  @Input() Hotel!: HotelsRecomList;
  // get getFilteredMovies(): HotelsRecomList {
  //   return this.Hotel['filter']((h: { flag: boolean; }) => 
  //     h.flag!==true);
  // }
}
