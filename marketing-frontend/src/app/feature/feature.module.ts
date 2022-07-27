import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { PersonToolbarComponent } from './person/toolbar/person-toolbar.component';
import { FormsModule } from '@angular/forms';

import { PersonListComponent } from './person/list/person-list.component';
import { PersonComponent } from './person/form/person.component';
import { PersonComboboxComponent } from './person/person-combobox/person-combobox.component';

import { ProductosToolbarComponent } from './productos/productos-toolbar/productos-toolbar.component';
import { ProductosListComponent } from './productos/productos-list/productos-list.component';
import { ProductosComponent } from './productos/form/productos.component';
import { ProductosSearchComponent } from './productos/search/productos-search.component';
import { ProductoSearchComponent } from './productos/search/producto-search.component';

import { CampaignComponent } from './campaign/form/campaign.component';

import { OportunidadComponent } from './oportunidad/form/oportunidad.component';
import { ListComponent } from './oportunidad/list/list.component';
import { OportunidadToolbarComponent } from './oportunidad/toolbar/oportunidad-toolbar.component';

import { ProspectComponent } from './prospect/form/prospect.component';;
import { ProspectComboboxComponent } from './prospect/combobox/prospect-combobox.component';
import { ProspectListComponent } from './prospect/prospect-list/prospect-list.component';
import { ProspectToolbarComponent } from './prospect/prospect-toolbar/prospect-toolbar.component';



@NgModule({
  declarations: [

    PersonComponent,
    PersonListComponent,
    PersonComboboxComponent,
    PersonToolbarComponent,

    ProductosComponent,
    ProductosListComponent,
    ProductosSearchComponent,
    ProductosToolbarComponent,
    ProductoSearchComponent,

    OportunidadComponent,
    ListComponent,
    OportunidadToolbarComponent,

    ProspectComponent,
    ProspectListComponent,
    ProspectToolbarComponent,
    ProspectComboboxComponent,

    CampaignComponent

  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }
