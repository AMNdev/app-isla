import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';
import { Observable, catchError, throwError } from 'rxjs';
import {
  Aparato,
  Info,
  Instrucciones,
  Piso,
} from 'src/app/shared/interfaces/info.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) {}

  // obtiene las categorías de información (piso, instrucciones...)
  // FIXME: bastante inútil
  getInfoList(): Observable<Info[]> {
    return this.http.get<Info[]>(`${this.baseUrl}/info`).pipe(
      catchError((err: Error) => {
        console.error(err.message);
        return throwError(() => new Error('Error recibiendo lista'));
      })
    );
  }

  // Obtiene la info de cada categoría
  // fixme: no usada!
  // getInfoByID(id: string) {
  //   return this.http.get(`${this.baseUrl}/info?id=${id}`).pipe(
  //     catchError((err: Error) => {
  //       console.error(err.message);
  //       return throwError(() => new Error('Error recibiendo datos'));
  //     })
  //   );
  // }

  getPiso(): Observable<Piso> {
    return this.http.get<Piso>(`${this.baseUrl}/info/piso`).pipe(
      catchError((err: Error) => {
        console.error(err.message);
        return throwError(() => new Error('Error recibiendo piso'));
      })
    );
  }

  getInstrucciones(): Observable<Instrucciones> {
    return this.http
      .get<Instrucciones>(`${this.baseUrl}/info/instrucciones`)
      .pipe(
        catchError((err: Error) => {
          console.error(err.message);
          return throwError(() => new Error('Error recibiendo instrucciones'));
        })
      );
  }

  // setters
  setPiso(nuevoPiso: Piso) {
    return this.http.put<Piso>(`${this.baseUrl}/info/piso`, nuevoPiso).pipe(
      catchError((err: Error) => {
        console.error(err.message);
        return throwError(() => new Error('Error guardando piso'));
      })
    );
  }

  // FIXME: esto hay que arreglarlo después de tener claros los endpoints del backend
  setInstrucciones(nuevaInstruccion: Aparato) {
    return this.http
      .put<Aparato>(`${this.baseUrl}/info/instrucciones`, nuevaInstruccion)
      .pipe(
        catchError((err: Error) => {
          console.error(err.message);
          return throwError(() => new Error('Error grabando instrucciones'));
        })
      );
  }

  setAparato(nuevoAparato: Aparato) {
    console.log('setAparato')

   }

  // deleters
  deletePiso(toDelete: Piso) {
    return this.http.delete<Piso>(`${this.baseUrl}/info/${toDelete}`).pipe(
      catchError((err: Error) => {
        console.error(err.message);
        return throwError(() => new Error('Error guardando piso'));
      })
    );
  }

  deleteInstrucciones(toDelete:Instrucciones) {
    return this.http
      .delete<Instrucciones>(`${this.baseUrl}/info/instrucciones/${toDelete}`,)
      .pipe(
        catchError((err: Error) => {
          console.error(err.message);
          return throwError(() => new Error('Error grabando instrucciones'));
        })
      );
  }
}
