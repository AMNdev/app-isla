import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  public featuresList = [
    {
      feature_name: 'Antes de llegar',
      link: 'previo',
      image: 'https://picsum.photos/180',
    },
    {
      feature_name: 'El apartamento',
      link: 'info',
      image: 'https://picsum.photos/180',
    },
    {
      feature_name: 'Dónde comer',
      link: 'comer',
      image: 'https://picsum.photos/180',
    },
    {
      feature_name: 'Playas',
      image: 'https://picsum.photos/180',
      link: 'playas',
    },
    {
      feature_name: 'Turismo',
      link: 'turismo',
      image: 'https://picsum.photos/180',
    },
    {
      feature_name: 'Información útil',
      link: 'otros',
      image: 'https://picsum.photos/180',
    },
  ];
}
