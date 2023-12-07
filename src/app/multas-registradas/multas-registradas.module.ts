import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultasRegistradasPageRoutingModule } from './multas-registradas-routing.module';

import { MultasRegistradasPage } from './multas-registradas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultasRegistradasPageRoutingModule
  ],
  declarations: [MultasRegistradasPage]
})
export class MultasRegistradasPageModule {}
