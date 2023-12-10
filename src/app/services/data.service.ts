import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private registros: any[] = [];

  constructor() {}

  agregarRegistro(registro: any) {
    this.registros.push(registro);
  }

  obtenerRegistros() {
    return this.registros;
  }
}