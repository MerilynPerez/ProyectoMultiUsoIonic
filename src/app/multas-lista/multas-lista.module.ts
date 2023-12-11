import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultasListaPageRoutingModule } from './multas-lista-routing.module';

import { MultasListaPage } from './multas-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultasListaPageRoutingModule
  ],
  declarations: [MultasListaPage]
})
export class MultasListaPageModule {}
