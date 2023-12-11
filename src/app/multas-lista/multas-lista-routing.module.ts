import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultasListaPage } from './multas-lista.page';

const routes: Routes = [
  {
    path: '',
    component: MultasListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultasListaPageRoutingModule {}
