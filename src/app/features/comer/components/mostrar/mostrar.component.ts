import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { ComerService } from '../../comer.service';
import { Restaurante } from 'src/app/shared/interfaces/restaurantes.interface';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css'],
})
export class MostrarComponent implements OnInit {
  public restaurant!: Restaurante;

  constructor(
    private data: ComerService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.data.getRestaurantById(id)))
      .subscribe((restaurant) => {
        if (!restaurant) return this.router.navigateByUrl('./');
        this.restaurant = restaurant;
        return;
      });
  }
}
