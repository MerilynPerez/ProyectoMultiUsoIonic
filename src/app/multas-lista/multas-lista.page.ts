import { Component } from '@angular/core';
import { MultasService, Multa } from '../services/multas.service';

@Component({
  selector: 'app-multas-lista',
  templateUrl: 'multas-lista.page.html',
  styleUrls: ['multas-lista.page.scss'],
})
export class MultasListaPage {
  multas: Multa[] | undefined;

  constructor(private multasService: MultasService) {}

  ionViewWillEnter() {
    this.multas = this.multasService.getMultas();
  }
}
