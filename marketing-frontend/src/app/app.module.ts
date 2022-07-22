import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ProspectComponent } from './feature/prospect/prospect.component';
import { CampaignComponent } from './feature/campaign/campaign.component';
import { ProductosComponent } from './feature/productos/productos.component';
import { OportunidadComponent } from './feature/oportunidad/form/oportunidad.component';
=======

>>>>>>> 043f0a31ce2efc82b5ac3c1c01d91c4a8188c745


@NgModule({
  declarations: [
<<<<<<< HEAD

    AppComponent
=======
    AppComponent,
>>>>>>> 043f0a31ce2efc82b5ac3c1c01d91c4a8188c745

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
