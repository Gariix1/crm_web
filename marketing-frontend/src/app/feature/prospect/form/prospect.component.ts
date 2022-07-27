import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProspectService } from '../prospect.service';
import { Prospect } from '../prospect';
import { ProspectReferences } from './../ProspectReferences';
@Component({
  selector: 'app-prospect',
  templateUrl: './prospect.component.html',

})
export class ProspectComponent implements OnInit {

  currentProspect: Prospect = this.resetProspect();

  constructor(
    private prospectService: ProspectService,
    private activedRoute: ActivatedRoute,
    private router:Router
  ) { }

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
        this.currentProspect = this.resetProspect();
        this.router.navigate(['/layout/prospect-list'])
      }
    )
  }

  findById(prospectoId: number): void{
    this.prospectService.findById(prospectoId)
    .subscribe(
      (response: Prospect) => {
        console.log("registro encontrado");
        this.currentProspect=response
        this.currentProspect.references.forEach(
          (item) => {
            this.prospectService.findById(item.referenciaId).subscribe(
              (auth:Prospect) => item.nombre=auth.nombre
            )

          }
        )
      }
    )
  }

  cancelar(){
    this.router.navigate(['/layout/prospect-list'])
  }


  resetProspect(){
    return this.currentProspect = {

    prospectoId: 0,
    nombre: "" ,
    identificacion: "",
    origen: "",
    telefono: 0,
    direccion:"",
    correo:"",
    created:new Date(),
    updated:new Date(),
    enable: false,
    creadoPor: 0,
    references:[]

    };
  }

  removeProspecto(prospectId: number){
    this.currentProspect.references =
    this.currentProspect.references.filter(
      (item) => item.referenciaId != prospectId
    )
  }

  onSelect(relacionados:Prospect): void{
    let prospectosrelacionados:ProspectReferences={prospectoId:this.currentProspect.prospectoId,
      prospectoReferenciasId:0,referenciaId:relacionados.prospectoId,
       nombre:relacionados.nombre};
    this.currentProspect.references.push(prospectosrelacionados)
  }

  


}
