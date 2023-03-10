import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

import { HeaderComponent } from './header/header.component';


import {MatTabsModule} from '@angular/material/tabs';
import { TabsComponent } from './tabs/tabs.component';

import { AccomodationsComponent } from './accomodations/accomodations.component';
import { CardsAccomodationComponent } from './cards-accomodation/cards-accomodation.component';
import {MatCardModule} from '@angular/material/card';
import { EventsComponent } from './events/events.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CardHotelComponent } from './card-hotel/card-hotel.component';
import {MatButtonModule} from '@angular/material/button';
import { CardsRecomendedHotelsComponent } from './cards-recomended-hotels/cards-recomended-hotels.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CardSkopjeComponent } from './card-skopje/card-skopje.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    TabsComponent,
    EventsComponent,
    PageNotFoundComponent,
    AccomodationsComponent,
    CardsAccomodationComponent,
    CardHotelComponent,
    CardsRecomendedHotelsComponent,
    SearchBarComponent,
    PopUpComponent,
    CardSkopjeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
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
