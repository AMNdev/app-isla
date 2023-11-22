import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurismoComponent } from './components/turismo/turismo.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';
import { TurismoRoutingModule } from './turismo-routing.module';


@NgModule({
  declarations: [
    TurismoComponent,
    MostrarComponent
  ],
  imports: [
    CommonModule,
    TurismoRoutingModule
  ],
})
export class TurismoModule {}
