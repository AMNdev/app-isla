import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrevioComponent } from './components/previo/previo.component';
import { PrevioRoutingModule } from './previo-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { NormasComponent } from './components/normas/normas.component';
import { DireccionesComponent } from './components/direcciones/direcciones.component';



@NgModule({
  declarations: [
    PrevioComponent,
    NormasComponent,
    DireccionesComponent
  ],
  imports: [
    CommonModule,
    PrevioRoutingModule,
    SharedModule,
    MaterialModule,
  ]
})
export class PrevioModule { }
