import { Component, OnInit } from '@angular/core';
import { ComerService } from '../../comer.service';
import { Restaurante } from 'src/app/shared/interfaces/restaurantes.interface';

@Component({
  selector: 'app-comer',
  templateUrl: './comer.component.html',
  styleUrls: ['./comer.component.css'],
})
export class ComerComponent implements OnInit {
  public restaurants: Restaurante[] = [];

  constructor(private data: ComerService) {}

  ngOnInit(): void {
    this.data.getRestaurants()
      .subscribe(list => this.restaurants=list);
  }
}
