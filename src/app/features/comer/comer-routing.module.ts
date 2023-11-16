import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComerComponent } from './components/comer/comer.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';

const routes: Routes = [
  {
    path: '',
    component: ComerComponent
  },
  {
    path: ':id',
    component: MostrarComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class ComerRoutingModule { }

