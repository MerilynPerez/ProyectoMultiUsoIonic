import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultaDetallePage } from './multas-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: MultaDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultasDetallePageRoutingModule {}
