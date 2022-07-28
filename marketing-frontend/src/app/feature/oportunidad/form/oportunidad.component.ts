import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OportunidadService } from '../oportunidad.service';
import { Oportunidad } from '../oportunidad';
import { ProductosService } from '../../productos/productos.service';
import { Productos } from '../../productos/productos';

@Component({
  selector: 'app-oportunidad',
  templateUrl: './oportunidad.component.html'
})
export class OportunidadComponent implements OnInit {

  currentOportunidad: Oportunidad = this.resetPerson();

  constructor(
    private oportunidadService: OportunidadService,
    private activedRoute: ActivatedRoute,
    private route: Router,
    private productosService: ProductosService
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
        this.currentOportunidad = this.resetPerson();
        this.route.navigate(['/layout/oportunidad-list']);
      }
    )
  }

  findById(oportunidadId: number): void{
    this.oportunidadService.findById(oportunidadId)
    .subscribe(
      (response: Oportunidad) => {
        console.log("registro encontrado");
        this.currentOportunidad=response;
        this.currentOportunidad.productos.forEach(
          (item) => {
            this.productosService.findById(item.productoId).subscribe(
              (producto:Productos) => item.nombre = producto.nombre
            )
          }
        )
      }
    )
  }

  resetPerson(){
    return this.currentOportunidad = {
      oportunidadId: 0,
      prospectoId: 0,
      monto: 0.0 ,
      etapaId: 0,
      vendedorId: 0,
      campaniaId: 0,
      created:new Date(),
      updated:new Date(),
      enable: true,
      descripcion: "",
      productos: []
    }
  }

  onSelect(producto: Productos):void{
    this.currentOportunidad.productos.push(producto);
  }

  removeProductos(oportunidadId: number){
    this.currentOportunidad.productos =
    this.currentOportunidad.productos.filter(
      (item) => item.productoId != oportunidadId
    )
  }

  /*
  delete():void{
    this.oportunidadService.deleteById(this.currentOportunidad.id)
    .subscribe(
      () => {
        console.log("Registro eliminado");
        this.currentOportunidad = this.resetPerson();
      }
    )
  }*/
}