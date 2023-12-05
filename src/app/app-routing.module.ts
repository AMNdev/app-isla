import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './core/menu/menu.component';

const routes: Routes = [
  {
    path: 'comer',
    loadChildren: () => import('./features/comer/comer.module').then(m => m.ComerModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./features/info/info.module').then(m => m.InfoModule)
  },
  {
    path: 'otros',
    loadChildren: () => import('./features/otros/otros.module').then(m => m.OtrosModule)
  },
  {
    path: 'playas',
    loadChildren: () => import('./features/playas/playas.module').then(m => m.PlayasModule)
  },
  {
    path: 'previo',
    loadChildren: () => import('./features/previo/previo.module').then(m => m.PrevioModule)
  },
  {
    path: 'turismo',
    loadChildren: () => import('./features/turismo/turismo.module').then(m => m.TurismoModule)
  },
  {
    path: 'carmen',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '',
    component: MenuComponent
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
