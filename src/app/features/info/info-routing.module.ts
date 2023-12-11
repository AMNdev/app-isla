import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './components/info/info.component';
import { PisoComponent } from './components/piso/piso.component';
import { InstruccionesComponent } from './components/instrucciones/instrucciones.component';

const routes: Routes = [
  {
    path: '',
    component: InfoComponent,
  },
  {
    path: 'piso',
    component: PisoComponent,
  },
  {
    path: 'instrucciones',
    component: InstruccionesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class InfoRoutingModule {}
