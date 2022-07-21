import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OportunidadComponent } from '../feature/oportunidad/form/oportunidad.component';
import { ListComponent } from '../feature/oportunidad/list/list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component:MainComponent,
    children:[
      {path: '', component:DashboardComponent},
      {path: 'dashboard', component:DashboardComponent},
      {path: 'oportunidad-list', component:ListComponent},
      {path: 'oportunidad-form', component:OportunidadComponent},
      {path: 'oportunidad-form/:id', component:OportunidadComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
