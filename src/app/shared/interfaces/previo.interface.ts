import { Coordenadas } from "./otros.interface";

// Interface para el piso
export interface Localizacion {
  nombre: string;
  direccion: string;
  localizacion: Coordenadas;
  enlaceGoogleMaps: string;
}
