import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuCardComponent } from './components/menu-card/menu-card.component';
import { MaterialModule } from '../material/material.module';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [
    MenuCardComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MenuCardComponent,
    SpinnerComponent,

  ]
})
export class SharedModule { }
