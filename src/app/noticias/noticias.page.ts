import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../servicios/noticias.service';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  noticias: any[] = [];

  constructor(public noticiasService: NoticiasService) {}

  ngOnInit() {
    this.obtenerNoticias();
  }

  obtenerNoticias() {
    this.noticiasService.obtenerNoticias().subscribe(
      (data) => {
        this.noticias = data;
      },
      (error) => {
        console.error('Error al obtener noticias', error);
      }
    );
  }
}