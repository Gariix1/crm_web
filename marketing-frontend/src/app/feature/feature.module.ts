import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { PersonToolbarComponent } from './person/toolbar/person-toolbar.component';
import { FormsModule } from '@angular/forms';
import { PersonListComponent } from './person/list/person-list.component';
<<<<<<< HEAD


import { CampaignComponent } from './campaign/form/campaign.component';
import { CampaignListComponent } from './campaign/list/campaign-list.component';
import { CampaignToolbarComponent } from './campaign/toolbar/campaign-toolbar.component';

import { ProspectComponent } from './prospect/form/prospect.component';
import { ProspectListComponent } from './prospect/prospect-list/prospect-list.component';
import { ProspectToolbarComponent } from './prospect/prospect-toolbar/prospect-toolbar.component';
import { OportunidadComponent } from './oportunidad/oportunidad.component';
import { ProductosComponent } from './productos/productos.component';
import { PersonComboboxComponent } from './person/person-combobox/person-combobox.component';
import { ProspectSearchComponent } from './prospect/search/prospect-search.component';


=======
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
>>>>>>> a9a664416dba71c2deb35801768b699f388dc3d3

@NgModule({
  declarations: [

    PersonComponent,
    PersonToolbarComponent,
    PersonListComponent,

<<<<<<< HEAD
    CampaignComponent,
    CampaignListComponent,
    CampaignToolbarComponent,

    OportunidadComponent,
=======
    ProductosComponent,
    ProductosToolbarComponent,
    ProductosListComponent,

    CampaignComponent,


    ListComponent,//oportunidad
    OportunidadToolbarComponent,
    OportunidadComponent,
    ProspectComboboxComponent,
>>>>>>> a9a664416dba71c2deb35801768b699f388dc3d3

    ProspectComponent,
    ProspectListComponent,
    ProspectToolbarComponent,
<<<<<<< HEAD
<<<<<<< HEAD


    ProductosComponent
=======
>>>>>>> a9a664416dba71c2deb35801768b699f388dc3d3

=======
    OportunidadComponent,
    CampaignComponent,
    ProductosComponent,
    PersonComboboxComponent,
    ProspectSearchComponent,


>>>>>>> 2c8f6fade3cf5dc50ac2f9a9bc972a4a296101f1
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }