import { ProductosRelacionados } from "./ProductosRelacionados";

export interface Productos {
  productoId: number,
  nombre: string,
  descripcion: string,
  marca: string,
  modelo: string,
  created: Date,
  updated: Date,
  enable: boolean,
  personsId: number,
  relacionados: ProductosRelacionados[]



}
