import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  public featuresList = [
    {
      feature_name: 'comer',
      link: 'comer',
      image: 'https://picsum.photos/180',
    },
    {
      feature_name: 'info',
      link: 'info',
      image: 'https://picsum.photos/180',
    },
    {
      feature_name: 'playas',
      image: 'https://picsum.photos/180',
      link: 'playas',
    },
    {
      feature_name: 'previo',
      link: 'previo',
      image: 'https://picsum.photos/180',
    },
    {
      feature_name: 'turismo',
      link: 'turismo',
      image: 'https://picsum.photos/180',
    },
    {
      feature_name: 'otros',
      link: 'otros',
      image: 'https://picsum.photos/180',
    },
  ];
}
