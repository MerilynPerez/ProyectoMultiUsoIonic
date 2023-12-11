import { Injectable } from '@angular/core';

export interface Multa {
  id: number;
  descripcion: string;
  monto: number;
}

@Injectable({
  providedIn: 'root'
})
export class MultasService {
  private multas: Multa[] = [
    { id: 1, descripcion: 'Estacionamiento indebido', monto: 500 },
    { id: 2, descripcion: 'Exceso de velocidad', monto: 1000 },
  ];

  getMultas(): Multa[] {
    return this.multas;
  }

  getMultaDetalle(id: number): Multa | undefined {
    const multaEncontrada = this.multas.find(multa => multa.id === id);
    if (multaEncontrada) {
      return multaEncontrada;
    } else {
      console.error(`No se encontró ninguna multa con el ID ${id}`);
      return undefined;
    }
  }
}