import { Component, OnInit } from '@angular/core';
import { OtrosService } from '../../otros.service';
import { ActivatedRoute, Router } from '@angular/router';
import { of, switchMap, tap } from 'rxjs';
import {
  Gasolineras,
  Tiendas,
} from 'src/app/shared/interfaces/otros.interface';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css'],
})
export class MostrarComponent implements OnInit {
  public mostrar: any;
  // public mostrar?: Tiendas | Gasolineras;
  // tipo any porque así utilizo un solo componente para mostrar todos los tipos de datos

  constructor(
    private data: OtrosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => {
          if (id === 'gasolineras') return this.data.getGasolineras();
          if (id === 'tiendas') return this.data.getTiendas();
          if (id === 'salud') return this.data.getSalud();
          return of();
        })
      )
      .subscribe((x) => (this.mostrar = x));
  }
}
