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
import { ProspectComboboxComponent } from './prospect/combobox/prospect-combobox.component';

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
<<<<<<< HEAD
    ListComponent,
    OportunidadToolbarComponent,
    OportunidadComponent,
    CampaignComponent,
    ProductosComponent,
    ProspectComponent,
    ProspectComboboxComponent
=======
    ProspectComponent,
    ProspectListComponent,
    ProspectToolbarComponent,
    OportunidadComponent,
    CampaignComponent,
    ProductosComponent

>>>>>>> 043f0a31ce2efc82b5ac3c1c01d91c4a8188c745
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }
