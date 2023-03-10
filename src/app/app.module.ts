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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatButtonModule} from '@angular/material/button';
import { VideoComponent } from './video/video.component';
import { CardPicsComponent } from './card-pics/card-pics.component';
import { EventCardComponent } from './event-card/event-card.component';






@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    TabsComponent,
    PageNotFoundComponent,
    AccomodationsComponent,
    CardsAccomodationComponent,
    VideoComponent,
    CardPicsComponent,
    EventCardComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
