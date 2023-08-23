import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dispositivos',
    loadChildren: () => import('./dispositivos/dispositivos.module').then( m => m.DispositivosPageModule)
  },
  {
    path: 'detalle-sensor',
    loadChildren: () => import('./detalle-sensor/detalle-sensor.module').then( m => m.DetalleSensorPageModule)
  },
  {
    path: 'detalle-galga',
    loadChildren: () => import('./detalle-galga/detalle-galga.module').then( m => m.DetalleGalgaPageModule)
  },
  {
    path: 'detalle-mediciones',
    loadChildren: () => import('./detalle-mediciones/detalle-mediciones.module').then( m => m.DetalleMedicionesPageModule)
  },
  {
    path: 'detalle-logs',
    loadChildren: () => import('./detalle-logs/detalle-logs.module').then( m => m.DetalleLogsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
