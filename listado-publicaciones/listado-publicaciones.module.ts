import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoPublicacionesPageRoutingModule } from './listado-publicaciones-routing.module';

import { ListadoPublicacionesPage } from './listado-publicaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoPublicacionesPageRoutingModule
  ],
  declarations: [ListadoPublicacionesPage]
})
export class ListadoPublicacionesPageModule {}
