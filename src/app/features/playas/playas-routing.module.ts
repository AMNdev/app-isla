import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayasComponent } from './components/playas/playas.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';


const routes: Routes = [
  {
    path: '',
    component: PlayasComponent
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
export class PlayasRoutingModule { }

