import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { EventsComponent } from './events/events.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path:'', component:TabsComponent},
      {path:'home', component:TabsComponent},
      {path:'events', component:EventsComponent},
      {path:'**', component:PageNotFoundComponent},


    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
