import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaMultasPage } from './mapa-multas.page';

const routes: Routes = [
  {
    path: '',
    component: MapaMultasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaMultasPageRoutingModule {}
