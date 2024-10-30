import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { IconInputComponent } from './components/icon-input/icon-input.component';
import { IconComponent } from './components/icon/icon.component';
import { MultiFilterComponent } from './components/multi-filter/multi-filter.component';
import { TextCarouselComponent } from './components/text-carousel/text-carousel.component';

@NgModule({
  declarations: [
    CardComponent,
    MultiFilterComponent,
    IconInputComponent,
    IconComponent,
    TextCarouselComponent,
  ],
  imports: [CommonModule],
  exports: [MultiFilterComponent, CardComponent, TextCarouselComponent],
})
export class SharedModule {}
