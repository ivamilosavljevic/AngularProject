import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccomodationsComponent } from './accomodations/accomodations.component';
import { AttractionsComponent } from './attractions/attractions.component';
import { EventCardComponent } from './event-card/event-card.component';



const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path:'', component:TabsComponent},
      {path:'home', component:TabsComponent},
      {path:'events', component:EventCardComponent},
      {path: 'accomodations', component: AccomodationsComponent },
      {path: 'attractions', component: AttractionsComponent},
      {path:'hotels', component:AccomodationsComponent},
      {path:'**', component:PageNotFoundComponent},
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
