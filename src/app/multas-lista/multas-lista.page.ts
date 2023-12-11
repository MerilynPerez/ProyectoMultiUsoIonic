import { Component } from '@angular/core';
import { MultasService, Multa } from '../services/multas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multas-lista',
  templateUrl: 'multas-lista.page.html',
  styleUrls: ['multas-lista.page.scss'],
})
export class MultasListaPage {
  multas!: Multa[]; 

  constructor(private router: Router) {}

  irADetalleMulta(multaId: number) {
    this.router.navigate(['/multa-detalle', multaId]);
  }
}
