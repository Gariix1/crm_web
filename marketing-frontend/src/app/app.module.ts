import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OportunidadComponent } from './feature/oportunidad/oportunidad.component';
import { ProspectComponent } from './feature/prospect/prospect.component';
import { CampaignComponent } from './feature/campaign/campaign.component';
import { ProductosComponent } from './feature/productos/productos.component';


@NgModule({
  declarations: [
    AppComponent,
    OportunidadComponent,
    ProspectComponent,
    CampaignComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
