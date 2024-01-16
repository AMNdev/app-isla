import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuCardComponent } from './components/menu-card/menu-card.component';
import { MaterialModule } from '../material/material.module';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { VideoContainerComponent } from './components/video-container/video-container.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MenuCardComponent,
    SpinnerComponent,
    VideoContainerComponent,
    FavoritosComponent,

   ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    MenuCardComponent,
    SpinnerComponent,
    VideoContainerComponent,
    FavoritosComponent,

  ]
})
export class SharedModule { }
