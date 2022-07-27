import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProspectService } from '../prospect.service';
import { Prospect } from '../prospect';
@Component({
  selector: 'app-prospect',
  templateUrl: './prospect.component.html',

})
export class ProspectComponent implements OnInit {

  currentProspect: Prospect = {
    prospectoId: 0,
    nombre: "" ,
    identificacion: "",
    origen: "",
    telefono: 0,
    direccion:"",
    correo:"",
    created:new Date(),
    updated:new Date(),
    enable: false
  };

  constructor(
    private prospectService: ProspectService,
    private activedRoute: ActivatedRoute
  ) {  }

  ngOnInit(): void {

    this.activedRoute.paramMap.subscribe(
      (params)=>{
        let prospectId:string="";
        if (params.get("id")){
          prospectId = params.get("id")!;
          this.findById(parseInt(prospectId));
        }
      }
    )
  }

  save(): void {
    this.prospectService.save(this.currentProspect)
    .subscribe(
      (response) => {
        console.log("registro guardado");
        this.currentProspect = {
          prospectoId: 0,
          nombre: "" ,
          identificacion: "",
          origen: "",
          telefono: 0,
          direccion:"",
          correo:"",
          created:new Date(),
          updated:new Date(),
          enable: false
        }
      }
    )
  }

  findById(prospectoId: number): void{
    this.prospectService.findById(prospectoId)
    .subscribe(
      (response: Prospect) => {
        console.log("registro encontrado");
        this.currentProspect=response
      }
    )
  }
}
