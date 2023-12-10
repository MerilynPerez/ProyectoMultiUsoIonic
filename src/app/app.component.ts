import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Aplicar una multa', url: 'aplicar-multa', icon: 'newspaper' },
    { title: 'Ver clima', url: 'clima', icon: 'cloudy-night' },
    { title: 'Consulta de conductor', url: 'consulta-conductor', icon: 'id-card' },
    { title: 'Ver horoscopo', url: 'horoscopo', icon: 'sparkles' },
    { title: 'Multas registradas', url: 'multas-registradas', icon: 'document' },
    { title: 'Ver noticias', url: 'noticias', icon: 'clipboard' },
    { title: 'Tarifario de multas', url: 'tarifario-multas', icon: 'file-tray' },
    { title: '', url: 'login', icon: 'person-circle' },
  ];
  
}
