import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    path: 'comer',
    loadChildren: () => import('./features/comer/comer-routing.module').then(m => m.ComerRoutingModule)
  },
  {
    path: 'comer',
    loadChildren: () => import('./features/comer/comer-routing.module').then(m => m.ComerRoutingModule)
  },
  {
    path: 'comer',
    loadChildren: () => import('./features/comer/comer-routing.module').then(m => m.ComerRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
