import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { attractionsJSON } from '../api/attractions/attractions';
import { IAttractions } from '../models';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.css']
})
export class AttractionsComponent{

attractions = attractionsJSON;


  
constructor(private dialogRef: MatDialog){}

openDialog(attraction: IAttractions){
  this.dialogRef.open(PopUpComponent, {
    data: {
      attraction: attraction
    }
  });
}

getItems(data : IAttractions){
  console.log(data);
}
}
