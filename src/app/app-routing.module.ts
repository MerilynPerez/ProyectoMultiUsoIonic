import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'aplicar-multa',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'tarifario-multas',
    loadChildren: () => import('./tarifario-multas/tarifario-multas.module').then( m => m.TarifarioMultasPageModule)
  },
  {
    path: 'consulta-vehiculo',
    loadChildren: () => import('./consulta-vehiculo/consulta-vehiculo.module').then( m => m.ConsultaVehiculoPageModule)
  },
  {
    path: 'consulta-conductor',
    loadChildren: () => import('./consulta-conductor/consulta-conductor.module').then( m => m.ConsultaConductorPageModule)
  },
  {
    path: 'aplicar-multa',
    loadChildren: () => import('./aplicar-multa/aplicar-multa.module').then( m => m.AplicarMultaPageModule)
  },
  {
    path: 'multas-registradas',
    loadChildren: () => import('./multas-registradas/multas-registradas.module').then( m => m.MultasRegistradasPageModule)
  },
  {
    path: 'mapa-multas',
    loadChildren: () => import('./mapa-multas/mapa-multas.module').then( m => m.MapaMultasPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'clima',
    loadChildren: () => import('./clima/clima.module').then( m => m.ClimaPageModule)
  },
  {
    path: 'horoscopo',
    loadChildren: () => import('./horoscopo/horoscopo.module').then( m => m.HoroscopoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
