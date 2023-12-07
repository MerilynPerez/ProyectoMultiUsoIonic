import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaMultasPageRoutingModule } from './mapa-multas-routing.module';

import { MapaMultasPage } from './mapa-multas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaMultasPageRoutingModule
  ],
  declarations: [MapaMultasPage]
})
export class MapaMultasPageModule {}
