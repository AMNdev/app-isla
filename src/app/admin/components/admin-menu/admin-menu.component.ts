import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent {
  public featuresList = [
    {
      feature_name: 'Antes de llegar',
      link: 'previo',
      image: 'https://huelvamarinera.es/wp-content/uploads/2021/02/isla-cristina-5.jpg',
    },
    {
      feature_name: 'El apartamento',
      link: 'info',
      image: 'https://plus.unsplash.com/premium_photo-1674676471154-1acce154992d?q=80&w=1426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      feature_name: 'Dónde comer',
      link: 'comer',
      image: 'https://plus.unsplash.com/premium_photo-1701015785997-30de0ba44aa0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      feature_name: 'Playas',
      image: 'https://images.unsplash.com/photo-1650730698798-6599fbdfd8a1?q=80&w=1557&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'playas',
    },
    {
      feature_name: 'Turismo',
      link: 'turismo',
      image: 'https://images.unsplash.com/photo-1442507210693-938e0e77fef2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      feature_name: 'Información útil',
      link: 'otros',
      image: 'https://images.unsplash.com/photo-1613178594694-5f96ae9b5bb0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];
}
