import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrevioComponent } from './components/previo/previo.component';
import { PrevioRoutingModule } from './previo-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [PrevioComponent],
  imports: [
    CommonModule,
    PrevioRoutingModule,
    SharedModule,
  ]
})
export class PrevioModule {}
