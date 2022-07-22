import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { PersonToolbarComponent } from './person/toolbar/person-toolbar.component';
import { FormsModule } from '@angular/forms';
import { PersonComponent } from './person/form/person.component';
import { PersonListComponent } from './person/list/person-list.component';
import { OportunidadComponent } from './oportunidad/oportunidad.component';
import { ProductosComponent } from './productos/productos.component';
import { CampaignComponent } from './campaign/form/campaign.component';
import { CampaignListComponent } from './campaign/list/campaign-list.component';
import { CampaignToolbarComponent } from './campaign/toolbar/campaign-toolbar.component';
import { ProspectComponent } from './prospect/prospect.component';

@NgModule({
  declarations: [

    PersonComponent,
    PersonToolbarComponent,
    PersonListComponent,
    CampaignComponent,
    CampaignListComponent,
    CampaignToolbarComponent,
    OportunidadComponent,
    ProspectComponent,
    ProductosComponent

  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }