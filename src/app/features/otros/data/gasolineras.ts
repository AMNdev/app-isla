import { Gasolineras } from 'src/app/shared/interfaces/otros.interface';

const gasolinerasMock: Gasolineras[] = [
  {
    nombre: 'Gasolinera Isla Cristina 1',
    direccion: 'Calle Principal, 123',
    poblacion: 'Isla Cristina',
    pais: 'España',
    coordenadas: { latitud: 37.2097, longitud: -7.3169 },
    gMaps: 'https://www.google.com/maps/place/37.2097,-7.3169',
    todoElDia: true,
  },
  {
    nombre: 'Gasolinera Isla Cristina 2',
    direccion: 'Avenida Secundaria, 456',
    poblacion: 'Isla Cristina',
    pais: 'España',
    coordenadas: { latitud: 37.2135, longitud: -7.3184 },
    gMaps: 'https://www.google.com/maps/place/37.2135,-7.3184',
    todoElDia: false,
  },
  {
    nombre: 'Gasolinera Ayamonte 1',
    direccion: 'Carretera Principal, 789',
    poblacion: 'Ayamonte',
    pais: 'España',
    coordenadas: { latitud: 37.2144, longitud: -7.4041 },
    gMaps: 'https://www.google.com/maps/place/37.2144,-7.4041',
    todoElDia: true,
  },
  {
    nombre: 'Gasolinera Lepe 1',
    direccion: 'Calle Secundaria, 101',
    poblacion: 'Lepe',
    pais: 'España',
    coordenadas: { latitud: 37.2577, longitud: -7.2099 },
    gMaps: 'https://www.google.com/maps/place/37.2577,-7.2099',
    todoElDia: false,
  },
  {
    nombre: 'Gasolinera Huelva 1',
    direccion: 'Avenida Principal, 222',
    poblacion: 'Huelva',
    pais: 'España',
    coordenadas: { latitud: 37.2622, longitud: -6.9495 },
    gMaps: 'https://www.google.com/maps/place/37.2622,-6.9495',
    todoElDia: true,
  },
];

export default gasolinerasMock;
