import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environments } from 'src/environments/environments';
import {
  GetPlayas,
  Playas,
  PlayasRespuesta,
} from 'src/app/shared/interfaces/playas.interface';

@Injectable({
  providedIn: 'root',
})
export class PlayasService {
  private baseUrl: string = environments.baseUrl;
  private token = localStorage.getItem('token') || '';
  private headers = {
    headers: {
      'x-token': this.token,
    },
  };

  constructor(private http: HttpClient) {}

  getPlayas(): Observable<GetPlayas> {
    return this.http.get<GetPlayas>(`${this.baseUrl}/api/playas`).pipe(
      catchError((err: Error) => {
        console.error(err.message);
        return throwError(() => new Error('Error recibiendo playas'));
      })
    );
  }

  getPlayaById(id: string): Observable<Playas> {
    return this.http.get<Playas>(`${this.baseUrl}/api/playas/${id}`).pipe(
      catchError((err: Error) => {
        console.error(err.message);
        return throwError(() => new Error('Error recibiendo playa'));
      })
    );
  }

  setPlaya(nuevaPlaya: Playas): Observable<PlayasRespuesta> {
    return this.http
      .post<PlayasRespuesta>(
        `${this.baseUrl}/api/playas`,
        nuevaPlaya,
        this.headers
      )
      .pipe(
        catchError((err: Error) => {
          console.error(err.message);
          return throwError(() => new Error('Error añadiendo nueva playa'));
        })
      );
  }

  deletePlaya(toDelete: Playas): Observable<PlayasRespuesta> {
    return this.http
      .delete<PlayasRespuesta>(
        `${this.baseUrl}/api/playas/${toDelete.uid}`,
        this.headers
      )
      .pipe(
        catchError((err: Error) => {
          console.error(err.message);
          return throwError(() => new Error('Error eliminando playa'));
        })
      );
  }
}
