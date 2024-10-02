import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';
import { Observable, catchError, tap, throwError } from 'rxjs';
import {
  Aparato,
  AparatoRespuesta,
  Info,
  Instrucciones,
  Piso,
  PisoRespuesta,
} from 'src/app/shared/interfaces/info.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  private baseUrl: string = environments.baseUrl;
  private token = localStorage.getItem('token') || '';
  private headers = {
        headers: {
          'x-token': this.token,
        },
      }

  constructor(private http: HttpClient) {}

  // obtiene las categorías de información (piso, instrucciones...)
  // FIXME: bastante inútil
  getInfoList(): Observable<Info[]> {
    return this.http.get<Info[]>(`${this.baseUrl}/api/info`);
  }

  getInfoByID(id: string) {
    return this.http.get(`${this.baseUrl}/info?id=${id}`);
  }

  getPiso(): Observable<PisoRespuesta> {
    return this.http.get<PisoRespuesta>(`${this.baseUrl}/api/piso`).pipe(
      // tap((res) => console.log(res)),
      catchError((err: Error) => {
        console.error(err.message);
        return throwError(() => new Error('Error recibiendo piso'));
      })
    );
  }

  getInstrucciones(): Observable<Instrucciones> {
    return this.http
      .get<Instrucciones>(`${this.baseUrl}/api/instrucciones`)
      .pipe(
        catchError((err: Error) => {
          console.error(err.message);
          return throwError(() => new Error('Error recibiendo instrucciones'));
        })
      );
  }

  // setters
  setPiso(nuevoPiso: Piso) {

    return this.http
      .put<Piso>(`${this.baseUrl}/api/piso`, nuevoPiso, this.headers)
      .pipe(
        catchError((err: Error) => {
          console.error(err.message);
          return throwError(() => new Error('Error guardando piso'));
        })
      );
  }

  // FIXME: esto hay que arreglarlo después de tener claros los endpoints del backend
  setInstrucciones(nuevaInstruccion: Aparato): Observable<AparatoRespuesta> {
    return this.http
      .post<AparatoRespuesta>(`${this.baseUrl}/api/instrucciones`, nuevaInstruccion, this.headers)
      .pipe(
        catchError((err: Error) => {
          console.error(err.message);
          return throwError(() => new Error('Error grabando instrucciones'));
        })
      );
  }

  setAparato(nuevoAparato: Aparato) {
    console.log('setAparato');
  }

  // deleters

  deleteInstrucciones(toDelete: Aparato) {
    console.log({toDelete})

    return this.http
      .delete<AparatoRespuesta>(`${this.baseUrl}/api/instrucciones/${toDelete.uid}`, this.headers)
      .pipe(
        catchError((err: Error) => {
          console.error(err.message);
          return throwError(() => new Error('Error grabando instrucciones'));
        })
      );
  }
}
