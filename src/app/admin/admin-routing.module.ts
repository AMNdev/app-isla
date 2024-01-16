import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { ComerAdminComponent } from './components/comer-admin/comer-admin.component';
import { InfoAdminComponent } from './components/info-admin/info-admin.component';
import { OtrosAdminComponent } from './components/otros-admin/otros-admin.component';
import { PlayasAdminComponent } from './components/playas-admin/playas-admin.component';
import { PrevioAdminComponent } from './components/previo-admin/previo-admin.component';
import { TurismoAdminComponent } from './components/turismo-admin/turismo-admin.component';
import { LayoutPageComponent } from './components/layout-page/layout-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: '', component: AdminMenuComponent },
      { path: 'comer', component: ComerAdminComponent },
      { path: 'info', component: InfoAdminComponent },
      { path: 'otros', component: OtrosAdminComponent },
      { path: 'playas', component: PlayasAdminComponent },
      { path: 'previo', component: PrevioAdminComponent },
      { path: 'turismo', component: TurismoAdminComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
