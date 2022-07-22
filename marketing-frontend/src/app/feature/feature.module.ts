import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { PersonToolbarComponent } from './person/toolbar/person-toolbar.component';
import { FormsModule } from '@angular/forms';

import { PersonListComponent } from './person/list/person-list.component';
import { PersonComponent } from './person/form/person.component';

import { ProductosToolbarComponent } from './productos/productos-toolbar/productos-toolbar.component';
import { ProductosListComponent } from './productos/productos-list/productos-list.component';
import { ProductosComponent } from './productos/form/productos.component';
import { OportunidadComponent } from './oportunidad/oportunidad.component';
import { ProspectComponent } from './prospect/prospect.component';
import { CampaignComponent } from './campaign/campaign.component';

@NgModule({
  declarations: [

    PersonComponent,
    PersonToolbarComponent,
    PersonListComponent,
    ProductosComponent,
    ProductosToolbarComponent,
    ProductosListComponent,
    OportunidadComponent,
    CampaignComponent,
    ProspectComponent

  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }
