import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrevioComponent } from './components/previo/previo.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';


const routes: Routes = [
  {
    path: '',
    component: PrevioComponent
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
export class PrevioRoutingModule { }

