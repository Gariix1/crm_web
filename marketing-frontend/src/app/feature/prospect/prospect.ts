import { ProspectReferences } from './ProspectReferences';
export interface Prospect {

  prospectoId: number,
  nombre: string,
  identificacion: string,
  origen: string,
  telefono: number,
  direccion: string,
  correo: string,
  created: Date,
  updated:Date,
  enable:boolean,
  personId:number,
  references: ProspectReferences[]



}
