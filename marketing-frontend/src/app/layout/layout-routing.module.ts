import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { CampaignComponent } from '../feature/campaign/form/campaign.component';
=======
import { CampaignComponent } from '../feature/campaign/campaign.component';
<<<<<<< HEAD
import { ProspectComponent } from '../feature/prospect/prospect.component';
=======
>>>>>>> a9a664416dba71c2deb35801768b699f388dc3d3
import { OportunidadComponent } from '../feature/oportunidad/oportunidad.component';
import { ProspectComponent } from '../feature/prospect/form/prospect.component';
>>>>>>> 043f0a31ce2efc82b5ac3c1c01d91c4a8188c745
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { PersonComponent } from '../feature/person/form/person.component';
import { PersonListComponent } from '../feature/person/list/person-list.component';
<<<<<<< HEAD
import { CampaignListComponent } from '../feature/campaign/list/campaign-list.component';
=======
<<<<<<< HEAD
import { ProductosComponent } from '../feature/productos/form/productos.component';
import { ProductosListComponent } from '../feature/productos/productos-list/productos-list.component';
=======
<<<<<<< HEAD
import { ListComponent } from '../feature/oportunidad/list/list.component';
import { OportunidadComponent } from '../feature/oportunidad/form/oportunidad.component';
=======
>>>>>>> a9a664416dba71c2deb35801768b699f388dc3d3
import { ProspectListComponent } from '../feature/prospect/prospect-list/prospect-list.component';
>>>>>>> 043f0a31ce2efc82b5ac3c1c01d91c4a8188c745
>>>>>>> f03c31a85e4f319d3abe55b36eddf70326ff00c0

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      //dashboard
      {path: 'dashboard', component: DashboardComponent },
      {path: 'dashboard', component: DashboardComponent },
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
<<<<<<< HEAD
      {path: 'campaign-list', component: CampaignListComponent},
  {path: 'campaign-form', component: CampaignComponent},
  {path: 'campaign-form/:id', component: CampaignComponent},
=======
      /*{path: 'campaign-list', component: CampaignListComponent},
        {path: 'campaign-form', component: CampaignComponent},
        {path: 'campaign-form/:id', component: CampaignComponent},*/
>>>>>>> a9a664416dba71c2deb35801768b699f388dc3d3

      //productos
      { path: 'productos', component: ProductosComponent },
      {path: 'productos-list', component: ProductosListComponent},
      {path: 'productos-form', component: ProductosComponent},
      {path: 'productos-form/:id', component: ProductosComponent},

      //oportunidad
      {path: 'oportunidad-list', component:ListComponent},
      {path: 'oportunidad-form', component:OportunidadComponent},
      {path: 'oportunidad-form/:id', component:OportunidadComponent}
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}

