import { Tiendas } from 'src/app/shared/interfaces/otros.interface';

const tiendasMock: Tiendas[] = [
  {
    nombre: 'Supermercado ABC',
    tipo: 'Supermercado',
    direccion: 'Calle Principal, 123',
    poblacion: 'Isla Cristina',
    coordenadas: { latitud: 37.2097, longitud: -7.3169 },
    gMaps: 'https://www.google.com/maps/place/37.2097,-7.3169',
  },
  {
    nombre: 'Tienda de Electrónicos XYZ',
    tipo: 'Electrónicos',
    direccion: 'Avenida Secundaria, 456',
    poblacion: 'Isla Cristina',
    coordenadas: { latitud: 37.2135, longitud: -7.3184 },
    gMaps: 'https://www.google.com/maps/place/37.2135,-7.3184',
  },
  {
    nombre: 'Supermercado XYZ',
    tipo: 'Supermercado',
    direccion: 'Carretera Principal, 789',
    poblacion: 'Isla Cristina',
    coordenadas: { latitud: 37.2144, longitud: -7.4041 },
    gMaps: 'https://www.google.com/maps/place/37.2144,-7.4041',
  },
  {
    nombre: 'Tienda de Ropa ABC',
    tipo: 'Ropa',
    direccion: 'Calle Secundaria, 101',
    poblacion: 'Lepe',
    coordenadas: { latitud: 37.2577, longitud: -7.2099 },
    gMaps: 'https://www.google.com/maps/place/37.2577,-7.2099',
  },
  {
    nombre: 'Tienda de Juguetes XYZ',
    tipo: 'Juguetes',
    direccion: 'Avenida Principal, 222',
    poblacion: 'Ayamonte',
    coordenadas: { latitud: 37.2622, longitud: -6.9495 },
    gMaps: 'https://www.google.com/maps/place/37.2622,-6.9495',
  },
  // Agrega más tiendas según sea necesario
];

export default tiendasMock;
