import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OportunidadService } from './oportunidad.service';
import { Oportunidad } from './oportunidad';

@Component({
  selector: 'app-oportunidad',
  templateUrl: './oportunidad.component.html'
})
export class OportunidadComponent implements OnInit {

  currentOportunidad: Oportunidad = {
    oportunidadId: 0,
    prospectoId: 0,
    monto: 0.0 ,
    etapaId: 0,
    vendedorId: 0,
    campaniaId: 0,
    created:new Date(),
    updated:new Date(),
    enable: false
  };

  constructor(
    private oportunidadService: OportunidadService,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(
      (params)=>{
        let oportunidadId:string="";
        if (params.get("id")){
          oportunidadId = params.get("id")!;
          this.findById(parseInt(oportunidadId));
        }
      }
    )
  }

  save(): void {
    this.oportunidadService.save(this.currentOportunidad)
    .subscribe(
      (response) => {
        console.log("registro guardado");
        this.currentOportunidad = {
          oportunidadId: 0,
          prospectoId: 0,
          monto: 0.0 ,
          etapaId: 0,
          vendedorId: 0,
          campaniaId: 0,
          created:new Date(),
          updated:new Date(),
          enable: false
        }
      }
    )
  }

  findById(oportunidadId: number): void{
    this.oportunidadService.findById(oportunidadId)
    .subscribe(
      (response: Oportunidad) => {
        console.log("registro encontrado");
        this.currentOportunidad=response
      }
    )
  }

}
