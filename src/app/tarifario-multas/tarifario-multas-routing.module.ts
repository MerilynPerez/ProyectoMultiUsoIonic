import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarifarioMultasPage } from './tarifario-multas.page';

const routes: Routes = [
  {
    path: '',
    component: TarifarioMultasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarifarioMultasPageRoutingModule {}
