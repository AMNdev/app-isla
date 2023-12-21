import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrevioComponent } from './components/previo/previo.component';


const routes: Routes = [
  {
    path: '',
    component: PrevioComponent
  },
  

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrevioRoutingModule { }

