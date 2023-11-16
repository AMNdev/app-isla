import { Injectable } from '@angular/core';
import { Playas } from 'src/app/shared/interfaces/playas.interface';

@Injectable({
  providedIn: 'root',
})
export class PlayasService {
  private playas: Playas[] = [
    {
      nombre: 'Playa Central',
      descripcion:
        'Una playa amplia y popular con arena fina y aguas cristalinas.',
      gMaps: 'https://www.google.com/maps/place/Playa+Central,+Isla+Cristina',
      imagen: 'url_de_la_imagen_playa_central.jpg',
    },
    {
      nombre: 'Playa de los Pescadores',
      descripcion:
        'Una encantadora playa junto al puerto, ideal para relajarse y disfrutar del paisaje marino.',
      gMaps:
        'https://www.google.com/maps/place/Playa+de+los+Pescadores,+Isla+Cristina',
      imagen: 'url_de_la_imagen_playa_pescadores.jpg',
    },
    {
      nombre: 'Playa de Islantilla',
      descripcion:
        'Una extensa playa con dunas y áreas naturales, perfecta para largos paseos junto al mar.',
      gMaps:
        'https://www.google.com/maps/place/Playa+de+Islantilla,+Isla+Cristina',
      imagen: 'url_de_la_imagen_playa_islantilla.jpg',
    },
    {
      nombre: 'Playa del Hoyo',
      descripcion:
        'Una playa más tranquila, alejada del bullicio, con aguas claras y ambiente sereno.',
      gMaps: 'https://www.google.com/maps/place/Playa+del+Hoyo,+Isla+Cristina',
      imagen: 'url_de_la_imagen_playa_hoyo.jpg',
    },
    {
      nombre: 'Playa de la Casita Azul',
      descripcion:
        'Una pequeña playa con encanto, ideal para aquellos que buscan tranquilidad y belleza escénica.',
      gMaps:
        'https://www.google.com/maps/place/Playa+de+la+Casita+Azul,+Isla+Cristina',
      imagen: 'url_de_la_imagen_playa_casita_azul.jpg',
    },
    {
      nombre: 'Playa Dorada',
      descripcion:
        'Una playa de arenas doradas y aguas cristalinas, perfecta para disfrutar del sol y el mar.',
      gMaps: 'https://www.google.com/maps/place/Playa+Dorada,+Isla+Cristina',
      imagen: 'url_de_la_imagen_playa_dorada.jpg',
    },
    {
      nombre: 'Playa de los Corales',
      descripcion:
        'Una playa con arrecifes de corales, ideal para la práctica de snorkel y buceo.',
      gMaps:
        'https://www.google.com/maps/place/Playa+de+los+Corales,+Isla+Cristina',
      imagen: 'url_de_la_imagen_playa_corales.jpg',
    },
    {
      nombre: 'Playa del Sol',
      descripcion:
        'Una playa soleada con extensas áreas para tomar el sol y disfrutar de actividades playeras.',
      gMaps: 'https://www.google.com/maps/place/Playa+del+Sol,+Isla+Cristina',
      imagen: 'url_de_la_imagen_playa_sol.jpg',
    },
  ];

  constructor() {}
}
