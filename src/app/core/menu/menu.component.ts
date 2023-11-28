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
      link: 'link',
      image: 'https://picsum.photos/180',
    },
    {
      feature_name: 'info',
      link: 'link',
      image: 'https://picsum.photos/180',
    },
    {
      feature_name: 'playas',
      image: 'https://picsum.photos/180',
      link: 'link',
    },
    {
      feature_name: 'previo',
      link: 'link',
      image: 'https://picsum.photos/180',
    },
    {
      feature_name: 'turismo',
      link: 'link',
      image: 'https://picsum.photos/180',
    },
    {
      feature_name: 'otros',
      link: 'link',
      image: 'https://picsum.photos/180',
    },
  ];
}
