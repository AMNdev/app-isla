import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environments } from 'src/environments/environments.prod';
import {
  ChangeDireccion,
  ChangeNorma,
  GetDirecciones,
  GetNormas,
  Localizacion,
  Norma,
} from 'src/app/shared/interfaces/previo.interface';

@Injectable({
  providedIn: 'root',
})
export class PrevioService {
  private token = localStorage.getItem('token') || '';
  private headers = {
    headers: {
      'x-token': this.token,
    },
  };

  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) {}

  getDirecciones(): Observable<GetDirecciones> {
    return this.http
      .get<GetDirecciones>(`${this.baseUrl}/api/direcciones`)
      .pipe(
        catchError((err) => {
          console.error(err);
          return throwError(() => new Error('Error recibiendo direcciones'));
        })
      );
  }

  getNormas(): Observable<GetNormas> {
    return this.http.get<GetNormas>(`${this.baseUrl}/api/normas`).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(() => new Error('Error recibiendo normas'));
      })
    );
  }

  deleteNorma(toDelete: Norma) {
    return this.http
      .delete(`${this.baseUrl}/api/normas/${toDelete.uid}`, this.headers)
      .pipe(
        catchError((err) => {
          console.log(err);
          return throwError(() => new Error('Error eliminando norma'));
        })
      );
  }

  setNormas(nuevaNorma: Norma): Observable<ChangeNorma> {
    return this.http
      .post<ChangeNorma>(`${this.baseUrl}/api/normas`, nuevaNorma, this.headers)
      .pipe(
        catchError((err) => {
          console.error(err);
          return throwError(() => new Error('Error añadiendo norma'));
        })
      );
  }

  setNewAddress(newAddress: Localizacion) {
    return this.http
      .post<ChangeDireccion>(
        `${this.baseUrl}/api/direcciones`,
        newAddress,
        this.headers
      )
      .pipe(
        catchError((err) => {
          console.error(err);
          return throwError(() => new Error('Error añadiendo localización'));
        })
      );
  }

  deleteAddress(toDelete: Localizacion) {
    return this.http
      .delete(`${this.baseUrl}/api/direcciones/${toDelete.uid}`, this.headers)
      .pipe(
        catchError((err) => {
          console.error(err);
          return throwError(() => new Error('Error eliminando localización'));
        })
      );
  }
}
