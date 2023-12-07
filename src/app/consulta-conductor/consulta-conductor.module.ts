import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaConductorPageRoutingModule } from './consulta-conductor-routing.module';

import { ConsultaConductorPage } from './consulta-conductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaConductorPageRoutingModule
  ],
  declarations: [ConsultaConductorPage]
})
export class ConsultaConductorPageModule {}
