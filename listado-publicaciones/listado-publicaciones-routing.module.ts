import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoPublicacionesPage } from './listado-publicaciones.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoPublicacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoPublicacionesPageRoutingModule {}
