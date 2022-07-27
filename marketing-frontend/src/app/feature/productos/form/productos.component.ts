import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Productos } from '../productos';
import { ProductosService } from '../productos.service';
import { ProductosRelacionados } from '../ProductosRelacionados';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {

  currentProductos: Productos = this.resetProductos();

  constructor(
    private productosService: ProductosService,
    private activedRoute: ActivatedRoute,
    private route:Router,

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
        this.currentProductos = this.resetProductos();
        this.route.navigate(['/layaout.person-list']);

      }
    )
  }

  findById(productoId: number): void{
    this.productosService.findById(productoId)
    .subscribe(
      (response: Productos) => {
        console.log("registro encontrado");
        this.currentProductos=response;
        this.currentProductos.relacionados.forEach(
          (item)=>{
            this.productosService.findById(item.relacionId).subscribe(
              (relacionados:Productos) => item.nombre = relacionados.nombre
            )

          }
        )
      }
    )
  }

  resetProductos(){
    return this.currentProductos = {
      productoId: 0,
      nombre: "" ,
      descripcion: "",
      marca: "",
      modelo : "",
      created:new Date(),
      updated:new Date(),
      enable: false,
      personsId: 0,
      relacionados: []


    };

  }

  onSelect(relacionados:Productos): void{
    let productosrelacionados:ProductosRelacionados={productoId:this.currentProductos.productoId,
      id:0,relacionId:relacionados.productoId,
       nombre:relacionados.nombre};
    this.currentProductos.relacionados.push(productosrelacionados)
  }

  removeProductos(productoId: number){
    this.currentProductos.relacionados =
    this.currentProductos.relacionados.filter(
      (item) => item.relacionId != productoId
    )
  }
}
