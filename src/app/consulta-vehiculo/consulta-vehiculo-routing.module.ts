import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaVehiculoPage } from './consulta-vehiculo.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaVehiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaVehiculoPageRoutingModule {}
