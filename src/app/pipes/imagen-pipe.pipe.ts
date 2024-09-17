import { Pipe, PipeTransform } from '@angular/core';
import { environments } from 'src/environments/environments';

@Pipe({
  name: 'imagenPipe',
})
export class ImagenPipe implements PipeTransform {
  transform(value: string, type: string): string {
    if (value.includes('https')) {
      return value;
    } else {
      return `${environments.baseUrl}/api/uploads/${type}/${value}`;
    }
  }
}
