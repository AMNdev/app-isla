import { Localizacion } from "src/app/shared/interfaces/previo.interface";

// Mock para el piso
export const mockPiso: Localizacion = {
  nombre: 'Mi Piso Turístico',
  direccion: 'Calle Principal, 123',
  localizacion: { latitud: 37.2097, longitud: -7.3169 },
  enlaceGoogleMaps: 'https://www.google.com/maps/place/37.2097,-7.3169',
};

// Mock para el garaje
export const mockGaraje: Localizacion = {
  nombre: 'Mi Garaje',
  direccion: 'Calle Secundaria, 456',
  localizacion: { latitud: 37.2135, longitud: -7.3184 },
  enlaceGoogleMaps: 'https://www.google.com/maps/place/37.2135,-7.3184',
};
