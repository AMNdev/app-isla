import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtrosComponent } from './components/otros/otros.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';
import { OtrosRoutingModule } from './otros-routing.module';



@NgModule({
  declarations: [
    OtrosComponent,
    MostrarComponent
  ],
  imports: [
    CommonModule,
    OtrosRoutingModule
  ]
})
export class OtrosModule { }
