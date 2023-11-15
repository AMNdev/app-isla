import { Injectable } from '@angular/core';
import { Restaurante } from 'src/app/shared/interfaces/restaurantes';

@Injectable({
  providedIn: 'root',
})
export class ComerService {
  private restaurantes: Restaurante[] = [
    {
      nombre: 'El Rinconcito',
      direccion: 'Calle de la Paz, Madrid',
      link: 'www.elrinconcito.com',
      descripcion:
        'Un lugar acogedor para disfrutar de la mejor comida mexicana',
      localizacion: 'https://www.google.com/maps/place/Calle+de+la+Paz,+Madrid',
    },
    {
      nombre: 'La Trattoria',
      direccion: 'Avenida Italia, Barcelona',
      link: 'www.latrattoria.com',
      descripcion: 'Auténtica cocina italiana en el corazón de Barcelona',
      localizacion:
        'https://www.google.com/maps/place/Avenida+Italia,+Barcelona',
    },
    {
      nombre: 'Sushi Fusion',
      direccion: 'Calle Sushi, Valencia',
      link: 'www.sushifusion-valencia.com',
      descripcion:
        'Una experiencia única que fusiona sabores japoneses y mediterráneos',
      localizacion: 'https://www.google.com/maps/place/Calle+Sushi,+Valencia',
    },
    {
      nombre: 'Burger Heaven',
      direccion: 'Plaza de las Hamburguesas, Sevilla',
      link: 'www.burgerheaven-sevilla.com',
      descripcion:
        'Las mejores hamburguesas de Sevilla, ¡un paraíso para los amantes de la carne!',
      localizacion:
        'https://www.google.com/maps/place/Plaza+de+las+Hamburguesas,+Sevilla',
    },
    {
      nombre: 'Pasta Paradiso',
      direccion: 'Calle de la Pasta, Zaragoza',
      link: 'www.pastaparadiso-zaragoza.com',
      descripcion:
        'El rincón ideal para los amantes de la pasta fresca y deliciosa',
      localizacion:
        'https://www.google.com/maps/place/Calle+de+la+Pasta,+Zaragoza',
    },
    {
      nombre: 'Veggie Delight',
      direccion: 'Avenida Verde, Bilbao',
      link: 'www.veggiedelight-bilbao.com',
      descripcion: 'Comida vegetariana deliciosa, ¡un deleite para tu paladar!',
      localizacion: 'https://www.google.com/maps/place/Avenida+Verde,+Bilbao',
    },
    {
      nombre: "Fisherman's Catch",
      direccion: 'Paseo del Pescador, Málaga',
      link: 'www.fishermanscatch-malaga.com',
      descripcion:
        'Mariscos y pescados frescos en un ambiente costero encantador',
      localizacion:
        'https://www.google.com/maps/place/Paseo+del+Pescador,+Málaga',
    },
    {
      nombre: 'Wok Wonders',
      direccion: 'Calle del Wok, Alicante',
      link: 'www.wokwonders-alicante.com',
      descripcion:
        'Wok asiático con una variedad sorprendente de sabores y ingredientes',
      localizacion: 'https://www.google.com/maps/place/Calle+del+Wok,+Alicante',
    },
    {
      nombre: 'Steakhouse Supreme',
      direccion: 'Carrera de las Carnes, Murcia',
      link: 'www.steakhousesupreme-murcia.com',
      descripcion:
        'Carnes a la parrilla preparadas con maestría, ¡una experiencia suprema!',
      localizacion:
        'https://www.google.com/maps/place/Carrera+de+las+Carnes,+Murcia',
    },
    {
      nombre: 'Sweet Temptations',
      direccion: 'Calle de los Postres, Granada',
      link: 'www.sweettemptations-granada.com',
      descripcion:
        'El paraíso para los amantes de los postres, ¡déjate tentar por lo dulce!',
      localizacion:
        'https://www.google.com/maps/place/Calle+de+los+Postres,+Granada',
    },
  ];
  constructor() {}
}
