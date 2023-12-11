import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaVehiculoPageRoutingModule } from './consulta-vehiculo-routing.module';

import { ConsultaVehiculoPage } from './consulta-vehiculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaVehiculoPageRoutingModule
  ],
  declarations: [ConsultaVehiculoPage]
})
export class ConsultaVehiculoPageModule {}

