import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperimentsModule } from './modules/experiments/experiments.module';
import { HotelModule } from './modules/hotel/hotel.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ExperimentsModule, HotelModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
