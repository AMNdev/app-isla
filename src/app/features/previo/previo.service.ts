import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';
import {
  Localizacion,
  Norma,
} from 'src/app/shared/interfaces/previo.interface';
import { environments } from 'src/environments/environments.prod';

@Injectable({
  providedIn: 'root',
})
export class PrevioService {
  // private direcciones?: Localizacion[];
  // private normas?: Norma[];

  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) {}

  getDirecciones(): Observable<Localizacion[]> {
    return this.http.get<Localizacion[]>(`${this.baseUrl}/direcciones`).pipe(
      catchError((err) => {
        alert('Error de carga');
        console.log(err);
        return of([]);
      })
    );
  }

  getNormas(): Observable<Norma[]> {
    return this.http.get<Norma[]>(`${this.baseUrl}/normas`).pipe(
      catchError((err) => {
        alert('Error de carga');
        console.log(err);
        return of([]);
      })
    );
  }

  deleteNorma(toDelete: Norma) {
    return this.http.delete(`${this.baseUrl}/normas/${toDelete.id}`).pipe(
      catchError((err) => {
        console.log(err);
        return of('error');
      })
    );
    // si falla devuelve 'error' por el of
    // si ok, devuelve {}
  }

  setNormas(nuevaNorma: Norma) {
    return this.http.post<Norma>(`${this.baseUrl}/normas`, nuevaNorma).pipe(
      catchError((err) => {
        console.log(err);
        return of({ id: 0, norma: 'error' });
      })
    );
  }


  setNewAddress(newAddress:Localizacion) {

    return this.http.post<Localizacion>(`${this.baseUrl}/direcciones`, newAddress).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(()=>new Error())
      })
    );
  }

  deleteAddress(toDelete: Localizacion) {
    return this.http.delete(`${this.baseUrl}/direcciones/${toDelete.id}`).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(()=>new Error())
      })
    );

  }
}
// todo: reformular la gestión de errores

