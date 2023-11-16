import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './components/info/info.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';
import { InfoRoutingModule } from './info-routing.module';



@NgModule({
  declarations: [
    InfoComponent,
    MostrarComponent
  ],
  imports: [
    CommonModule,
    InfoRoutingModule
  ]
})
export class InfoModule { }
