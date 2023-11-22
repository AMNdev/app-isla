import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayasComponent } from './components/playas/playas.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';
import { PlayasRoutingModule } from './playas-routing.module';



@NgModule({
  declarations: [
    PlayasComponent,
    MostrarComponent
  ],
  imports: [
    CommonModule,
    PlayasRoutingModule
  ]
})
export class PlayasModule { }
