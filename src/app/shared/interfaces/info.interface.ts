export interface Instrucciones {
  id: string;
  aparatos: [
    {
      aparato: string;
      descripcion: string[];
      video: string[];
      imagenes: string[];
    }
  ];
}

export interface Info {
  id: string;
  descripcion: string[];
  video: string[];
}

// Generated by https://quicktype.io

export interface Piso {
  id: string;
  resumen: string;
  descripcion: string[];
  video: [
    {
      descripcion: string;
      videoUrl: string;
    }
  ];
}

// Generated by https://quicktype.io

export interface Turismo {
  id:          string;
  nombre:      string;
  descripcion: string;
  direccion:   string;
  gMaps:       string;
}
