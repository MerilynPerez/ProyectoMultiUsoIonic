import { Component } from '@angular/core';
import { ConsultaVehiculoService } from '../services/consulta-vehiculo.service';

@Component({
  selector: 'app-consulta-vehiculo',
  templateUrl: 'consulta-vehiculo.page.html',
  styleUrls: ['consulta-vehiculo.page.scss'],
})
export class ConsultaVehiculoPage {
  placa!: string ;
  vehiculo: any; 

  constructor(private consultaVehiculoService: ConsultaVehiculoService) {}

  buscarVehiculo() {
    this.consultaVehiculoService.consultarPorPlaca(this.placa).subscribe(
      vehiculo => {
        this.vehiculo = vehiculo;
      },
      error => {
        console.error('Error al consultar el vehículo:', error);
      }
    );
  }
}
