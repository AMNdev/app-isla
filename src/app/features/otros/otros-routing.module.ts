import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OtrosComponent } from './components/otros/otros.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';

const routes: Routes = [
  {
    path: '',
    component: OtrosComponent
  },
  {
    path: ':id',
    component: MostrarComponent
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtrosRoutingModule { }

