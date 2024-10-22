import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperimentsRoutingModule } from './experiments-routing.module';
import { CubeComponent } from './cube/cube.component';


@NgModule({
  declarations: [
    CubeComponent
  ],
  imports: [
    CommonModule,
    ExperimentsRoutingModule
  ]
})
export class ExperimentsModule { }
