import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaConductorService {
  consultarPorLicencia(licencia: string): Observable<any> {
    const conductores = [
      {
        licencia: 'ABC123',
        nombre: 'Juan',
        apellido: 'Pérez',
        fechaNacimiento: '01/01/1990',
        direccion: 'Calle 123, Ciudad',
        telefono: '123-456-7890',
        foto: 'url_foto_juan'
      },
      {
        licencia: 'XYZ789',
        nombre: 'María',
        apellido: 'Gómez',
        fechaNacimiento: '02/02/1985',
        direccion: 'Avenida 456, Ciudad',
        telefono: '987-654-3210',
        foto: 'url_foto_maria'
      }
    ];

    const conductorEncontrado = conductores.find(c => c.licencia === licencia);

    return of(conductorEncontrado);
  }
}
