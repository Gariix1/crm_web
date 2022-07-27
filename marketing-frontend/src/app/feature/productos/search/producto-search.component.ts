import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Productos } from '../productos';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-producto-search',
  templateUrl: './producto-search.component.html'
})
export class ProductoSearchComponent implements OnInit {

  constructor(
    private productosService: ProductosService
  ) { }

  @Output() productoEmiter = new EventEmitter<Productos>();

  productos: Productos[] = []

  ngOnInit(): void {
  }

  findByName(term: string):void{
    if (term.length>=1){
      this.productosService.findByNombre(term).subscribe(
        (response) => this.productos = response
      )
    }
    if (term.length===0){
      this.productos = [];
    }
  }

  onSelect(producto: Productos):void{
    this.productoEmiter.emit(producto);
  }

}
