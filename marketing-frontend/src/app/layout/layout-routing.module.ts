import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignComponent } from '../feature/campaign/form/campaign.component';
import { OportunidadComponent } from '../feature/oportunidad/oportunidad.component';
import { ProspectComponent } from '../feature/prospect/form/prospect.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { ProductosComponent } from '../feature/productos/productos.component';
import { PersonComponent } from '../feature/person/form/person.component';
import { PersonListComponent } from '../feature/person/list/person-list.component';
import { CampaignListComponent } from '../feature/campaign/list/campaign-list.component';
import { ProspectListComponent } from '../feature/prospect/prospect-list/prospect-list.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      //dashboard
      { path: 'dashboard', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'person', component: PersonComponent },
      {path: 'person-list', component: PersonListComponent},
      {path: 'person-form', component: PersonComponent},
      {path: 'person-form/:id', component: PersonComponent},
      //prospect
      { path: 'prospect', component: ProspectComponent },
      {path: 'prospect-list', component: ProspectListComponent},
      {path: 'prospect-form', component: ProspectComponent},
      {path: 'prospect-form/:id', component: ProspectComponent},


      //campaign
      { path: 'campaign', component: CampaignComponent },
      {path: 'campaign-list', component: CampaignListComponent},
  {path: 'campaign-form', component: CampaignComponent},
  {path: 'campaign-form/:id', component: CampaignComponent},

      //productos
      { path: 'productos', component: ProductosComponent },
      /* {path: 'person-list', component: PersonListComponent},
      {path: 'person-form', component: PersonComponent},
  {path: 'person-form/:id', component: PersonComponent}, */

      //oportunidad
      { path: 'oportunidad', component: OportunidadComponent },
      /*  {path: 'oportunidad-list', component:ListComponent},
  {path: 'oportunidad-form', component:OportunidadComponent},
  {path: 'oportunidad-form/:id', component:OportunidadComponent} */
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
