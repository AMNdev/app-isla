import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TurismoComponent } from './components/turismo/turismo.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';


const routes: Routes = [
  {
    path: '',
    component: TurismoComponent
  },
  {
    path: ':id',
    component: MostrarComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class TurismoRoutingModule { }

