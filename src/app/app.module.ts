import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

import { HeaderComponent } from './header/header.component';
import { AttractionsComponent } from './attractions/attractions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';


import {MatTabsModule} from '@angular/material/tabs';
import { TabsComponent } from './tabs/tabs.component';
import { AccomodationsComponent } from './accomodations/accomodations.component';
import { CardsAccomodationComponent } from './cards-accomodation/cards-accomodation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VideoComponent } from './video/video.component';
import { CardPicsComponent } from './card-pics/card-pics.component';
import { EventCardComponent } from './event-card/event-card.component';
import { CardHotelComponent } from './card-hotel/card-hotel.component';
import { CardsRecomendedHotelsComponent } from './cards-recomended-hotels/cards-recomended-hotels.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { SearchBarComponent } from './search-bar/search-bar.component';

import { CardSkopjeComponent } from './card-skopje/card-skopje.component';
import { LenchePopupComponent } from './lenche-popup/lenche-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AttractionsComponent,
    PopUpComponent,
    HeaderComponent,
    TabsComponent,
    PageNotFoundComponent,
    AccomodationsComponent,
    CardsAccomodationComponent,
    VideoComponent,
    CardPicsComponent,
    EventCardComponent,

    CardHotelComponent,
    CardsRecomendedHotelsComponent,
    SearchBarComponent,
    PopUpComponent,
    CardSkopjeComponent,
    LenchePopupComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    RouterModule.forRoot([
      { 
        
        path: 'attractions', component: AttractionsComponent },
    ]),
      

    MatTabsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatCardModule, 
    MatButtonModule, 
    MatFormFieldModule,
    FormsModule, 
    MatInputModule, 
    MatDialogModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
