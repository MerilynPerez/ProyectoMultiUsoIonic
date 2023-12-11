import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultasDetallePage } from './multas-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: MultasDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultasDetallePageRoutingModule {}
