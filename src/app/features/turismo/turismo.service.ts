import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import {
  GetTurismo,
  Turismo,
  TurismoRespuesta,
} from 'src/app/shared/interfaces/turismo.interface';
import { environments } from 'src/environments/environments.prod';

@Injectable({
  providedIn: 'root',
})
export class TurismoService {
  private baseUrl: string = environments.baseUrl;
  private token = localStorage.getItem('token') || '';
  private headers = {
    headers: {
      'x-token': this.token,
    },
  };

  constructor(private http: HttpClient) {}

  // * Public:

  getTurismo(): Observable<GetTurismo> {
    return this.http.get<GetTurismo>(`${this.baseUrl}/api/api/turismo`);
  }

  // * Admin:

  newTurismo(turismo: Turismo) {
    return this.http
      .post<TurismoRespuesta>(
        `${this.baseUrl}/api/turismo/`,
        turismo,
        this.headers
      )
      .pipe(
        catchError((err) => {
          console.error(err);
          return throwError(() => new Error('Error añadiendo turismo'));
        })
      );
  }

  deleteTurismo(turismo: Turismo) {
    return this.http
      .delete<TurismoRespuesta>(
        `${this.baseUrl}/api/turismo/${turismo.uid}`,
        this.headers
      )
      .pipe(
        catchError((err) => {
          console.error(err);
          return throwError(() => new Error('Error eliminando turismo'));
        })
      );
  }

  modifyTurismo(tienda: Turismo) {
    console.warn('modificando TURISMO: implementar - http.put');
    console.log(tienda);
  }
}
