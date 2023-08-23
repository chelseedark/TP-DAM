import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleLogsPage } from './detalle-logs.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleLogsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleLogsPageRoutingModule {}
