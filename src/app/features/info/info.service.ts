import { Injectable } from '@angular/core';
import { Info } from 'src/app/shared/interfaces/info.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  private mockData: Info = {
    descripcion: [
      'Este es un piso turístico encantador en el corazón de la ciudad.',
      'Con impresionantes vistas y comodidades modernas, te sentirás como en casa.',
    ],
    video: [
      'https://www.youtube.com/watch?v=video1',
      'https://www.youtube.com/watch?v=video2',
    ],
    instrucciones: {
      aparato: 'Televisor',
      descripcion: [
        'Enciende el televisor usando el control remoto.',
        'Selecciona el canal deseado.',
        'Ajusta el volumen según tu preferencia.',
      ],
      video: ['https://www.youtube.com/watch?v=tv-instructions'],
      imagenes: ['url_de_imagen_tv_1.jpg', 'url_de_imagen_tv_2.jpg'],
    },
    butano: {
      descripcion: [
        'El piso utiliza bombonas de butano para la cocina y la calefacción.',
        'Si necesitas cambiar la bombona, sigue estos pasos:',
      ],
      video: ['https://www.youtube.com/watch?v=butano-instructions'],
    },
  };
  constructor() {}
}
