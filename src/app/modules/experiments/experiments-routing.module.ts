import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CubeComponent } from './cube/cube.component';
import { ExperimentsHomeComponent } from './experiments-home/experiments-home.component';

const routes: Routes = [{ path: '', component: ExperimentsHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExperimentsRoutingModule {}
