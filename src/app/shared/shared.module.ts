import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuCardComponent } from './components/menu-card/menu-card.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    MenuCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MenuCardComponent
  ]
})
export class SharedModule { }
