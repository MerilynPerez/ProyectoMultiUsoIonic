import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaVehiculoService {
  consultarPorPlaca(placa: string): Observable<any> {
    const vehiculos = [
      { placa: 'ABC123', marca: 'Toyota', modelo: 'Corolla', color: 'Rojo' },
      { placa: 'XYZ789', marca: 'Honda', modelo: 'Civic', color: 'Azul' },
    ];

    const vehiculoEncontrado = vehiculos.find(v => v.placa === placa);

    return of(vehiculoEncontrado);
  }
}
