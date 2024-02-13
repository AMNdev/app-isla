import { Coordenadas } from "./otros.interface";

// Interface para el piso
export interface Localizacion {
  id: string;
  nombre: string;
  direccion: string;
  localizacion: Coordenadas;
  enlaceGoogleMaps: string;
}

export interface Norma {
  id: number;
  norma: string;
}

export interface DialogData {
  title: string
  text: string;
}
