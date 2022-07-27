import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Productos } from '../productos';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-productos-search',
  templateUrl: './productos-search.component.html'
})
export class ProductosSearchComponent implements OnInit {

  constructor(
    private productosService: ProductosService
  ) {}

@Output () productosEmiter = new EventEmitter<Productos>();
productosrelacionadosies: Productos[]= [];

  ngOnInit(): void {
  }

  findByName(term: string): void{

    if (term.length>=2){
      this.productosService.findByNombre(term).subscribe(
        (response) => {
          console.log(term +" "+response);
          this.productosrelacionadosies = response }
      )
    }
    if(term.length===0){
      this.productosrelacionadosies = [];

    }

  }

  onSelect(productosrelacionadosies: Productos): void{
    this.productosEmiter.emit(productosrelacionadosies);
  }

}


