import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessComponent } from './components/business/business.component';
import { NeighborhoodComponent } from './components/neighborhood/neighborhood/neighborhood.component';

@NgModule({
  declarations: [
    AppComponent,
    BusinessComponent,
    NeighborhoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
