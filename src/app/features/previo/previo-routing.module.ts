import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrevioComponent } from './components/previo/previo.component';
import { NormasComponent } from './components/normas/normas.component';
import { DireccionesComponent } from './components/direcciones/direcciones.component';


const routes: Routes = [
  {
    path: '',
    component: PrevioComponent
  },
  {
    path: 'normas',
    component: NormasComponent
  },
  {
    path: 'direcciones',
    component: DireccionesComponent
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrevioRoutingModule { }

