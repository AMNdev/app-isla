import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TurismoComponent } from './components/turismo/turismo.component';


const routes: Routes = [
  {
    path: '',
    component: TurismoComponent
  },
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class TurismoRoutingModule { }

