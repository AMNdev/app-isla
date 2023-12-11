import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuCardComponent } from './components/menu-card/menu-card.component';
import { MaterialModule } from '../material/material.module';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { VideoContainerComponent } from './components/video-container/video-container.component';



@NgModule({
  declarations: [
    MenuCardComponent,
    SpinnerComponent,
    VideoContainerComponent,

   ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MenuCardComponent,
    SpinnerComponent,
    VideoContainerComponent,

  ]
})
export class SharedModule { }
