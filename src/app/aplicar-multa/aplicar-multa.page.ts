import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aplicar-multa',
  templateUrl: './aplicar-multa.page.html',
  styleUrls: ['./aplicar-multa.page.scss'],
})
export class AplicarMultaPage {

  cedula: number = 0;
  placa: number = 0;
  motivo: string = "";
  foto: string = "";
  voz: string = "";
  comentario: string ="";
  latitud: number =0;
  longitud: number =0;
  fechayhora: string;
  

  constructor(private router: Router) { 
    this.fechayhora = new Date().toLocaleString();
    
  }

  mostrarMapa() {
    console.log('Datos ingresados:', this.cedula, this.placa, this.latitud, this.longitud);

  this.router.navigate(['/mapa-multas'], {
    queryParams: {
      cedula: this.cedula,
      placa: this.placa,
      latitud: this.latitud,
      longitud: this.longitud,
    },
  });
  }

  

  agregarRegistro() {

    const date = new Date().toLocaleDateString();
    

    const data = {
      cedula: this.cedula,
      placa: this.placa,
      motivo: this.motivo,
      foto: this.foto,
      voz: this.voz,
      comentario: this.comentario,
      latitud: this.latitud,
      longitud: this.longitud,
      fecha: date,
      
    };

    const dataString = localStorage.getItem('data');

    if (dataString) {
      const dataArray = JSON.parse(dataString);
      dataArray.push(data);
      localStorage.setItem('data', JSON.stringify(dataArray));
    } else {
      const dataArray = [data]; 
      localStorage.setItem('data', JSON.stringify(dataArray));
    }

  
    this.cedula = 0;
    this.placa = 0;
    this.motivo = '';
    this.foto = '';
    this.voz = '';
    this.comentario = '';
    this.latitud = 0;
    this.longitud = 0;



    

  }
 

}
