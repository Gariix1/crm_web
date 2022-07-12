import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OportunidadComponent } from './feature/oportunidad/oportunidad.component';

const routes: Routes = [
  {path: 'oportunidad', component:OportunidadComponent},
  {path: 'oportunidad/:id', component:OportunidadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
