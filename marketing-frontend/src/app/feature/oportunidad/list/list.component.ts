import { Component, OnInit } from '@angular/core';
import { Oportunidad } from '../oportunidad';
import { OportunidadService } from '../oportunidad.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  constructor(
    private oportunidadService: OportunidadService
  ) { }

  oportunidades: Oportunidad[] = [];

  ngOnInit():void {
    this.findAll();
  }

  findAll():void{
    this.oportunidadService.findAll().subscribe(
      (response) => {
        this.oportunidades = response;
      }
    );
  }

  findByDescripcion(term: string){
    if (term.length===0){
      this.findAll();
    }

    if (term.length>=1){
      this.oportunidadService.findByDescripcion(term).subscribe(
        (response) => this.oportunidades = response
      )
    }

  }
}
