import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ComerAdminComponent } from './components/comer-admin/comer-admin.component';
import { InfoAdminComponent } from './components/info-admin/info-admin.component';
import { LayoutPageComponent } from './components/layout-page/layout-page.component';
import { OtrosAdminComponent } from './components/otros-admin/otros-admin.component';
import { PlayasAdminComponent } from './components/playas-admin/playas-admin.component';
import { PrevioAdminComponent } from './components/previo-admin/previo-admin.component';
import { SharedModule } from '../shared/shared.module';
import { TurismoAdminComponent } from './components/turismo-admin/turismo-admin.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { DialogComponent } from './shared/dialog/dialog.component';


@NgModule({
  declarations: [
    AdminMenuComponent,
    ComerAdminComponent,
    InfoAdminComponent,
    LayoutPageComponent,
    OtrosAdminComponent,
    PlayasAdminComponent,
    PrevioAdminComponent,
    TurismoAdminComponent,
    DialogComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class AdminModule {}
