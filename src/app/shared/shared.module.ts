import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MultiFilterComponent } from './multi-filter/multi-filter.component';
import { IconInputComponent } from './icon-input/icon-input.component';
import { IconComponent } from './icon/icon.component';

@NgModule({
  declarations: [CardComponent, MultiFilterComponent, IconInputComponent, IconComponent],
  imports: [CommonModule],
  exports: [MultiFilterComponent, CardComponent],
})
export class SharedModule {}
