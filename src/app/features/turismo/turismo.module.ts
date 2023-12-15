import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurismoComponent } from './components/turismo/turismo.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';
import { TurismoRoutingModule } from './turismo-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TurismoComponent,
    MostrarComponent
  ],
  imports: [
    CommonModule,
    TurismoRoutingModule,
    MaterialModule,
    SharedModule,
  ],
})
export class TurismoModule {}
