import { Component, OnInit } from '@angular/core';
import { ProductosService } from './../productos.service';
import { Productos } from '../productos';
@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html'

})
export class ProductosListComponent implements OnInit {

  constructor(private productosService: ProductosService) {

   }
   productos: Productos[] = [];

  ngOnInit(): void {
    this.findAll();
  }

  findAll():void {
    this.productosService.findAll().subscribe(
      (response) => {
        this.productos = response;
      }
    );
  }

  findByNombre(term: string){
    if (term.length===0){
      this.findAll();
    }

    if (term.length>=2){
      this.productosService.findByNombre(term).subscribe(
        (response) => this.productos = response
      )
    }

  }

}
