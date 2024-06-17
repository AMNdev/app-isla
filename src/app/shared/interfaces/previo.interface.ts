import { Coordenadas } from "./otros.interface";

// Interface para el piso
export interface GetDirecciones{
  ok: boolean;
  direcciones: Localizacion[]
}

export interface ChangeDireccion{
  ok: boolean;
  direccion: Localizacion
}

export interface Localizacion {
  uid?: string;
  // id: string;
  nombre: string;
  direccion: string;
  gMaps: string;
}

export interface ChangeNorma {
  ok: boolean;
  norma: Norma;
}

export interface GetNormas{
  ok: boolean;
  normas: Norma[];
}

export interface Norma {
  uid?: string;
  id: number;
  norma: string;
}

export interface DialogData {
  title: string
  text: string;
}
