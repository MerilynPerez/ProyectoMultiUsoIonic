import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultasDetallePageRoutingModule } from './multas-detalle-routing.module';

import { MultaDetallePage } from './multas-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultasDetallePageRoutingModule
  ],
  declarations: [MultaDetallePage]
})
export class MultasDetallePageModule {}
