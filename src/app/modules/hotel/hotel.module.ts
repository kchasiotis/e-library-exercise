import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { HotelRoutingModule } from './hotel-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomepageComponent],
  imports: [CommonModule, HotelRoutingModule, SharedModule],
})
export class HotelModule {}