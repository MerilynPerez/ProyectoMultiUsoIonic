import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AplicarMultaPage } from './aplicar-multa.page';

const routes: Routes = [
  {
    path: '',
    component: AplicarMultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AplicarMultaPageRoutingModule {}
