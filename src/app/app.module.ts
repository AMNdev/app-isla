import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrevioComponent } from './features/previo/previo.component';
import { InfoComponent } from './features/info/info.component';
import { PlayasComponent } from './features/playas/playas.component';
import { ComerComponent } from './features/comer/comer.component';
import { TurismoComponent } from './features/turismo/turismo.component';
import { OtrosComponent } from './features/otros/otros.component';

@NgModule({
  declarations: [
    AppComponent,
    PrevioComponent,
    InfoComponent,
    PlayasComponent,
    ComerComponent,
    TurismoComponent,
    OtrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
