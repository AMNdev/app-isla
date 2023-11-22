import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './core/menu/menu.component';

const routes: Routes = [
  {
    path: 'comer',
    loadChildren: () => import('./features/comer/comer-routing.module').then(m => m.ComerRoutingModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./features/info/info-routing.module').then(m => m.InfoRoutingModule)
  },
  {
    path: 'otros',
    loadChildren: () => import('./features/otros/otros-routing.module').then(m => m.OtrosRoutingModule)
  },
  {
    path: 'playas',
    loadChildren: () => import('./features/playas/playas-routing.module').then(m => m.PlayasRoutingModule)
  },
  {
    path: 'previo',
    loadChildren: () => import('./features/previo/previo-routing.module').then(m => m.PrevioRoutingModule)
  },
  {
    path: 'turismo',
    loadChildren: () => import('./features/turismo/turismo-routing.module').then(m => m.TurismoRoutingModule)
  },
  {
    path: '',
    component: MenuComponent
  },
  {
    path: '**',
    component: MenuComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
