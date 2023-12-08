import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as L from 'leaflet';


@Component({
  selector: 'app-mapa-multas',
  templateUrl: './mapa-multas.page.html',
  styleUrls: ['./mapa-multas.page.scss'],
})
export class MapaMultasPage{

  @ViewChild('map', { static: true })
  mapElement!: ElementRef;
  map: any;
  

  constructor(private route: ActivatedRoute, private navCtrl: NavController) {
    
   }

   

   ionViewDidEnter() {
    this.route.queryParams.subscribe((params) => {
      const cedula = params['cedula'];
      const placa = params['placa'];
      const latitud = parseFloat(params['latitud']);
      const longitud = parseFloat(params['longitud']);

      this.loadMap(latitud, longitud, cedula, placa);
    });
  }

  loadMap(latitud: number, longitud: number, cedula: any, placa: any) {
    this.map = L.map('map').setView([latitud, longitud], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);

    const marker = L.marker([latitud, longitud]).addTo(this.map);
    marker.bindPopup(`<b> Cedula:${cedula} Placa: ${placa}</b><br/>Latitud: ${latitud}<br/>Longitud: ${longitud}`).openPopup();
  }


  

}
