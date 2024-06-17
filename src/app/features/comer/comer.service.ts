import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { GetRestaurantes, Restaurante, RestauranteRespuesta } from 'src/app/shared/interfaces/restaurantes.interface';
import { environments } from 'src/environments/environments.prod';


@Injectable({
  providedIn: 'root',
})
export class ComerService  {
  private baseUrl: string = environments.baseUrl;
  private token = localStorage.getItem('token') || '';
  private headers = {
    headers: {
      'x-token': this.token,
    },
  };
  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<GetRestaurantes>{
    return this.http.get<GetRestaurantes>(`${this.baseUrl}/api/restaurantes`)
  }

  getRestaurantById(id: string): Observable<Restaurante> {
    return this.http.get<Restaurante>(`${this.baseUrl}/api/restaurantes/${id}`)
  }

  newRestaurant(venue: Restaurante): Observable<RestauranteRespuesta> {
    return this.http.post<RestauranteRespuesta>(`${this.baseUrl}/api/restaurantes/`, venue, this.headers ).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(() => new Error('Error añadiendo el restaurante'));
      })
    );
  }

  deleteRestaurant(venue: Restaurante): Observable<RestauranteRespuesta>  {
    return this.http.delete<RestauranteRespuesta>(`${this.baseUrl}/api/restaurantes/${venue.uid}`, this.headers ).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(() => new Error('Error eliminando el restaurante'));
      })
    );
  }

  modifyRestaurant(venue: Restaurante) {
    console.warn('modificando restaurante: implementar - http.put')
    console.log(venue)
  }


}
