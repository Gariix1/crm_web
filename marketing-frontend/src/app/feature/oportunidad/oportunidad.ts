import { Productos } from "../productos/productos";

export interface Oportunidad {
  oportunidadId: number,
  prospectoId: number,
  monto: number,
  etapaId: number,
  vendedorId: number,
  campaniaId: number,
  created: Date,
  updated: Date,
  enable: boolean,
  descripcion: string,
  productos: Productos[]

}