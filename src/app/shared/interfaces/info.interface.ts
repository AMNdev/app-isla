export interface Info{
  descripcion: string[];
  video: string[];
  instrucciones: Instrucciones;
  butano: Butano;
}

export interface Butano {
  descripcion: string[];
  video: string[];
}
export interface Instrucciones {
  aparato: string;
  descripcion: string[];
  video: string[];
  imagenes: string[]
}
