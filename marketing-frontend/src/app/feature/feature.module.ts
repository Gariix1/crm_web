import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { PersonToolbarComponent } from './person/toolbar/person-toolbar.component';
import { FormsModule } from '@angular/forms';
import { PersonComponent } from './person/form/person.component';
import { PersonListComponent } from './person/list/person-list.component';
import { ListComponent } from './oportunidad/list/list.component';
import { OportunidadToolbarComponent } from './oportunidad/toolbar/oportunidad-toolbar.component';
import { OportunidadComponent } from './oportunidad/form/oportunidad.component';
import { CampaignComponent } from './campaign/campaign.component';
import { ProductosComponent } from './productos/productos.component';
import { ProspectComponent } from './prospect/prospect.component';

@NgModule({
  declarations: [

    PersonComponent,
    PersonToolbarComponent,
    PersonListComponent,
    ListComponent,
    OportunidadToolbarComponent,
    OportunidadComponent,
    CampaignComponent,
    ProductosComponent,
    ProspectComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }
