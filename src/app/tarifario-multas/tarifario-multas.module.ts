import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarifarioMultasPageRoutingModule } from './tarifario-multas-routing.module';

import { TarifarioMultasPage } from './tarifario-multas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarifarioMultasPageRoutingModule
  ],
  declarations: [TarifarioMultasPage]
})
export class TarifarioMultasPageModule {}
