import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { ComerAdminComponent } from './components/comer-admin/comer-admin.component';
import { InfoAdminComponent } from './components/info-admin/info-admin.component';
import { PlayasAdminComponent } from './components/playas-admin/playas-admin.component';
import { PrevioAdminComponent } from './components/previo-admin/previo-admin.component';
import { OtrosAdminComponent } from './components/otros-admin/otros-admin.component';
import { TurismoAdminComponent } from './components/turismo-admin/turismo-admin.component';



@NgModule({
  declarations: [
      AdminMenuComponent,
      ComerAdminComponent,
      InfoAdminComponent,
      PlayasAdminComponent,
      PrevioAdminComponent,
      OtrosAdminComponent,
      TurismoAdminComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
