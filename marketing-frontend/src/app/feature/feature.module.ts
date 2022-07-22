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
import { CampaignComponent } from './campaign/campaign.component';
import { OportunidadComponent } from './oportunidad/form/oportunidad.component';
import { ProspectComponent } from './prospect/form/prospect.component';
import { ListComponent } from './oportunidad/list/list.component';
import { OportunidadToolbarComponent } from './oportunidad/toolbar/oportunidad-toolbar.component';
import { ProspectComboboxComponent } from './prospect/combobox/prospect-combobox.component';
import { ProspectListComponent } from './prospect/prospect-list/prospect-list.component';
import { ProspectToolbarComponent } from './prospect/prospect-toolbar/prospect-toolbar.component';

@NgModule({
  declarations: [

    PersonComponent,
    PersonToolbarComponent,
    PersonListComponent,

    ProductosComponent,
    ProductosToolbarComponent,
    ProductosListComponent,

    CampaignComponent,


    ListComponent,//oportunidad
    OportunidadToolbarComponent,
    OportunidadComponent,
    ProspectComboboxComponent,

    ProspectComponent,
    ProspectListComponent,
    ProspectToolbarComponent,

  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }
