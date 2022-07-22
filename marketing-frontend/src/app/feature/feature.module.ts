import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { PersonToolbarComponent } from './person/toolbar/person-toolbar.component';
import { FormsModule } from '@angular/forms';

import { PersonComponent } from './person/form/person.component';
import { PersonListComponent } from './person/list/person-list.component';

import { ProspectListComponent } from './prospect/prospect-list/prospect-list.component';
import { ProspectToolbarComponent } from './prospect/prospect-toolbar/prospect-toolbar.component';
import { ProspectComponent } from './prospect/form/prospect.component';
import { OportunidadComponent } from './oportunidad/oportunidad.component';
import { CampaignComponent } from './campaign/campaign.component';
import { ProductosComponent } from './productos/productos.component';

@NgModule({
  declarations: [

    PersonComponent,
    PersonToolbarComponent,
    PersonListComponent,
    ProspectComponent,
    ProspectListComponent,
    ProspectToolbarComponent,
    OportunidadComponent,
    CampaignComponent,
    ProductosComponent

  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }
