
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { attractionsJSON } from '../api/attractions/attractions';
import { IAttractions } from '../models';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


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

constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


@Component({
  selector: 'pop-up-dialog',
  templateUrl: 'pop-up-dialog.html',
})
export class DialogContentExampleDialog {}

