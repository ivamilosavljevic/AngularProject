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



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    TabsComponent,
    AccomodationsComponent,
    CardsAccomodationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
