import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperimentsRoutingModule } from './experiments-routing.module';
import { CubeComponent } from './cube/cube.component';
import { ExperimentsHomeComponent } from './experiments-home/experiments-home.component';


@NgModule({
  declarations: [
    CubeComponent,
    ExperimentsHomeComponent
  ],
  imports: [
    CommonModule,
    ExperimentsRoutingModule
  ]
})
export class ExperimentsModule { }
