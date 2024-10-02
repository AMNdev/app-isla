import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtrosComponent } from './components/otros/otros.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';
import { OtrosRoutingModule } from './otros-routing.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    OtrosComponent,
    MostrarComponent
  ],
  imports: [
    CommonModule,
    OtrosRoutingModule,
    SharedModule,
  ]
})
export class OtrosModule { }
