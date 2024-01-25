import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrevioComponent } from './components/previo/previo.component';
import { PrevioRoutingModule } from './previo-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [PrevioComponent],
  imports: [
    CommonModule,
    PrevioRoutingModule,
    SharedModule,
    MaterialModule,

  ],
  exports: [
    
  ]
})
export class PrevioModule {}
