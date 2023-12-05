import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComerComponent } from './components/comer/comer.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';
import { ComerRoutingModule } from './comer-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ComerComponent,
    MostrarComponent
  ],
  imports: [
    CommonModule,
    ComerRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class ComerModule { }
