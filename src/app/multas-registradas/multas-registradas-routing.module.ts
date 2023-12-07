import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultasRegistradasPage } from './multas-registradas.page';

const routes: Routes = [
  {
    path: '',
    component: MultasRegistradasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultasRegistradasPageRoutingModule {}
