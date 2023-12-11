import { Component } from '@angular/core';
import { ConsultaConductorService } from '../services/consulta-conductor.service';

@Component({
  selector: 'app-consulta-conductor',
  templateUrl: 'consulta-conductor.page.html',
  styleUrls: ['consulta-conductor.page.scss'],
})
export class ConsultaConductorPage {
  licencia!: string;
  conductor: any; 
  constructor(private consultaConductorService: ConsultaConductorService) {}

  buscarConductor() {
    this.consultaConductorService.consultarPorLicencia(this.licencia).subscribe(
      conductor => {
        this.conductor = conductor;
      },
      error => {
        console.error('Error al consultar el conductor:', error);
      }
    );
  }
}