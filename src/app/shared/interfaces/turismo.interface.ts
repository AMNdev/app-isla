export interface TurismoRespuesta {
  ok: boolean;
  turismoItem: Turismo;
}

export interface GetTurismo {
  ok: boolean;
  turismoItems: Turismo[];
}

export interface Turismo {
  uid?: string;
  nombre: string;
  direccion: string;
  link: string;
  descripcion: string;
  gMaps: string;
}
