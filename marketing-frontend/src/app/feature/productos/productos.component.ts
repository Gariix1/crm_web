import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from './productos.service';
import { Productos } from './productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {

  currentProductos: Productos = {
    productoId: 0,
    nombre: "" ,
    descripcion: "",
    marca: "",
    modelo : "",
    created:new Date(),
    updated:new Date(),
    enable: false
  };

  constructor(
    private productosService: ProductosService,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(
      (params)=>{
        let productoId:string="";
        if (params.get("id")){
          productoId = params.get("id")!;
          this.findById(parseInt(productoId));
        }
      }
    )
  }

  save(): void {
    this.productosService.save(this.currentProductos)
    .subscribe(
      (response) => {
        console.log("registro guardado");
        this.currentProductos = {
          productoId: 0,
          nombre: "" ,
          descripcion: "",
          marca: "",
          modelo : "",
          created:new Date(),
          updated:new Date(),
          enable: false
        };
      }
    )
  }

  findById(productoId: number): void{
    this.productosService.findById(productoId)
    .subscribe(
      (response: Productos) => {
        console.log("registro encontrado");
        this.currentProductos=response
      }
    )
  }

}
