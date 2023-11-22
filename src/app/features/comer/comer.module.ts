import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComerComponent } from './components/comer/comer.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';
import { ComerRoutingModule } from './comer-routing.module';


@NgModule({
  declarations: [
    ComerComponent,
    MostrarComponent
  ],
  imports: [
    CommonModule,
    ComerRoutingModule
  ]
})
export class ComerModule { }
