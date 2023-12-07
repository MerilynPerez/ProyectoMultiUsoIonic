import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Aplicar una multa', url: 'aplicar-multa', icon: 'mail' },
    { title: 'Ver clima', url: 'clima', icon: 'paper-plane' },
    { title: 'Consulta de conductor', url: 'consulta-conductor', icon: 'heart' },
    { title: 'Ver horoscopo', url: 'horoscopo', icon: 'archive' },
    { title: 'TraMapa de multas', url: 'mapa-multas', icon: 'trash' },
    { title: 'Multas registradas', url: 'multas-registradas', icon: 'warning' },
    { title: 'Ver noticias', url: 'noticias', icon: 'warning' },
    { title: 'Tarifario de multas', url: 'tarifario-multas', icon: 'warning' },
  ];
  
}
