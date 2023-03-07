import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

import { HeaderComponent } from './header/header.component';

import {MatTabsModule} from '@angular/material/tabs';
import { TabsComponent } from './tabs/tabs.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationBarComponent,
    HeaderComponent,
    TabsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
