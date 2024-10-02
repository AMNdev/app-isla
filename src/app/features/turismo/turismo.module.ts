import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurismoComponent } from './components/turismo/turismo.component';
import { TurismoRoutingModule } from './turismo-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TurismoComponent,
  ],
  imports: [
    CommonModule,
    TurismoRoutingModule,
    SharedModule,
  ],
})
export class TurismoModule {}
