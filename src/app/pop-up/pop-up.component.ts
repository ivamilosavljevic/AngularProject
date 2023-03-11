import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { attractionsJSON } from '../api/attractions/attractions';
import { IAttractions } from '../models';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {
  attraction: IAttractions | undefined;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {attraction: IAttractions} ){
    console.log(data);
    this.attraction = data.attraction;
  }
}