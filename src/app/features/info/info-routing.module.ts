import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './components/info/info.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';

const routes: Routes = [
  {
    path: '',
    component: InfoComponent
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
export class InfoRoutingModule { }

