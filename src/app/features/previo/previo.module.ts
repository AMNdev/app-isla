import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrevioComponent } from './components/previo/previo.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';
import { PrevioRoutingModule } from './previo-routing.module';



@NgModule({
  declarations: [
    PrevioComponent,
    MostrarComponent
  ],
  imports: [
    CommonModule,
    PrevioRoutingModule
  ]
})
export class PrevioModule { }
