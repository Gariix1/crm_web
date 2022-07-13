import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignComponent } from './feature/campaign/campaign.component';
import { OportunidadComponent } from './feature/oportunidad/oportunidad.component';
import { ProductosComponent } from './feature/productos/productos.component';
import { ProspectComponent } from './feature/prospect/prospect.component';

const routes: Routes = [
  {path: 'oportunidad', component:OportunidadComponent},
  {path: 'oportunidad/:id', component:OportunidadComponent},
  {path: 'prospect', component:ProspectComponent},
  {path: 'prospect/:id', component:ProspectComponent},
  {path: 'campaign', component:CampaignComponent},
  {path: 'campaign/:id', component:CampaignComponent},
  {path: 'productos', component:ProductosComponent},
  {path: 'productos/:id', component:ProductosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
