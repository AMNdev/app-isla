import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Playas } from 'src/app/shared/interfaces/playas.interface';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class PlayasService {
  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) {}

  getPlayas(): Observable<Playas[]> {
    return this.http.get<Playas[]>(`${this.baseUrl}/playas`).pipe(
      catchError((err: Error) => {
        console.error(err.message);
        return throwError(() => new Error('Error recibiendo playas'));
      })
    );
  }

  getPlayaById(id: string): Observable<Playas> {
    return this.http.get<Playas>(`${this.baseUrl}/playas/${id}`).pipe(
      catchError((err: Error) => {
        console.error(err.message);
        return throwError(() => new Error('Error recibiendo playa'));
      })
    );
  }

  setPlaya(nuevaPlaya: Playas) {
    return this.http.post<Playas>(`${this.baseUrl}/playas`, nuevaPlaya).pipe(
      catchError((err: Error) => {
        console.error(err.message);
        return throwError(() => new Error('Error añadiendo nueva playa'));
      })
    );
  }

  deletePlaya(toDelete: Playas) {
    return this.http.delete<Playas>(`${this.baseUrl}/playas/${toDelete.id}`).pipe(
      catchError((err: Error) => {
        console.error(err.message);
        return throwError(() => new Error('Error eliminando playa'));
      })
    );
  }
}
