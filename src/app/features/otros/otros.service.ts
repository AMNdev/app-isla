import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environments } from 'src/environments/environments';
import {
  GasolineraRespuesta,
  Gasolineras,
  GetGasolineras,
  GetSalud,
  GetTiendas,
  Salud,
  SaludRespuesta,
  TiendaRespuesta,
  Tiendas,
} from 'src/app/shared/interfaces/otros.interface';

@Injectable({
  providedIn: 'root',
})
export class OtrosService {
  private baseUrl: string = environments.baseUrl;
  private token = localStorage.getItem('token') || '';
  private headers = {
    headers: {
      'x-token': this.token,
    },
  };

  constructor(private http: HttpClient) {}

  getTiendas(): Observable<GetTiendas> {
    return this.http.get<GetTiendas>(`${this.baseUrl}/api/tiendas`).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(() => new Error('Error recibiendo tiendas'));
      })
    );;
  }

  getGasolineras(): Observable<GetGasolineras> {
    return this.http.get<GetGasolineras>(`${this.baseUrl}/api/gasolineras`).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(() => new Error('Error recibiendo gasolineras'));
      })
    );;
  }

  getSalud(): Observable<GetSalud> {
    return this.http.get<GetSalud>(`${this.baseUrl}/api/salud`).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(() => new Error('Error recibiendo centros de salud'));
      })
    );;
  }



  // * Admin:

  newTienda(tienda: Tiendas) {
    return this.http
      .post<TiendaRespuesta>(
        `${this.baseUrl}/api/tiendas/`,
        tienda,
        this.headers
      )
      .pipe(
        catchError((err) => {
          console.error(err);
          return throwError(() => new Error('Error añadiendo la tienda'));
        })
      );
  }

  deleteTienda(tienda: Tiendas) {
    return this.http
      .delete<TiendaRespuesta>(
        `${this.baseUrl}/api/tiendas/${tienda.uid}`,
        this.headers
      )
      .pipe(
        catchError((err) => {
          console.error(err);
          return throwError(() => new Error('Error eliminando la tienda'));
        })
      );
  }
  modifyTienda(tienda: Tiendas) {
    console.warn('modificando tienda: implementar - http.put');
    console.log(tienda);
  }

  newGasolinera(gasolinera: Gasolineras) {
    return this.http
      .post<GasolineraRespuesta>(
        `${this.baseUrl}/api/gasolineras/`,
        gasolinera,
        this.headers
      )
      .pipe(
        catchError((err) => {
          console.error(err);
          return throwError(() => new Error('Error añadiendo la gasolinera'));
        })
      );
  }

  deleteGasolinera(gasolinera: Gasolineras) {
    return this.http
      .delete<GasolineraRespuesta>(
        `${this.baseUrl}/api/gasolineras/${gasolinera.uid}`,
        this.headers
      )
      .pipe(
        catchError((err) => {
          console.error(err);
          return throwError(() => new Error('Error eliminando la gasolinera'));
        })
      );
  }

  modifyGasolinera(gasolinera: Gasolineras) {
    console.warn('modificando gasolinera: implementar - http.put');
    console.log(gasolinera);
  }

  newSalud(salud: Salud) {
    return this.http
      .post<SaludRespuesta>(`${this.baseUrl}/api/salud/`, salud, this.headers)
      .pipe(
        catchError((err) => {
          console.error(err);
          return throwError(() => new Error('Error añadiendo centro'));
        })
      );
  }

  deleteSalud(salud: Salud) {
    return this.http
      .delete<SaludRespuesta>(
        `${this.baseUrl}/api/salud/${salud.uid}`,
        this.headers
      )
      .pipe(
        catchError((err) => {
          console.error(err);
          return throwError(() => new Error('Error eliminando centro'));
        })
      );
  }
  modifySalud(salud: Salud) {
    console.warn('modificando centro salud: implementar - http.put');
    console.log(salud);
  }
}
