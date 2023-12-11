import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './components/info/info.component';
import { InfoRoutingModule } from './info-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { InstruccionesComponent } from './components/instrucciones/instrucciones.component';
import { PisoComponent } from './components/piso/piso.component';



@NgModule({
  declarations: [
    InfoComponent,
    InstruccionesComponent,
    PisoComponent,
  ],
  imports: [
    CommonModule,
    InfoRoutingModule,
    SharedModule,
    MaterialModule,
  ]
})
export class InfoModule { }
