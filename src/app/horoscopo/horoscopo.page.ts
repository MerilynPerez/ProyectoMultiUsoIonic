import { Component } from '@angular/core';
import {HoroscopoService } from '../servicios/horoscope.service';

@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.page.html',
  styleUrls: ['./horoscopo.page.scss'],
})
export class HoroscopoPage {
  signo: string = "";
  horoscopo: string = "";


  constructor(public horoscopoService: HoroscopoService) {}

  obtenerHoroscopo() {
    this.horoscopo = this.horoscopoService.getHoroscopo(this.signo);
  }
}