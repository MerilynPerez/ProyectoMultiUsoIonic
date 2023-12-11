import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MultasService, Multa } from '../services/multas.service';

@Component({
  selector: 'app-multa-detalle',
  templateUrl: 'multas-detalle.page.html',
  styleUrls: ['multas-detalle.page.scss'],
})
export class MultaDetallePage {
  multa: Multa | undefined;

  constructor(
    private route: ActivatedRoute,
    private multasService: MultasService
  ) {}

  ionViewWillEnter() {
    const multaId = this.route.snapshot.paramMap.get('id');

    if (multaId !== null && multaId !== undefined) {
      const parsedMultaId = +multaId;

      if (!isNaN(parsedMultaId)) {
        this.multa = this.multasService.getMultaDetalle(parsedMultaId);
      } else {
        console.error('ID de multa no válido');
      }
    } else {
      console.error('ID de multa no proporcionado');
    }
  }
}
