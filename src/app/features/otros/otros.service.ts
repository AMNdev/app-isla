import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gasolineras, Tiendas } from 'src/app/shared/interfaces/otros.interface';
import { Restaurante } from 'src/app/shared/interfaces/restaurantes.interface';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class OtrosService {
  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) {}

  getTiendas():Observable<Tiendas> {
    return this.http.get<Tiendas>(`${this.baseUrl}/tiendas`);
  }

  getGasolineras():Observable<Gasolineras> {
    return this.http.get<Gasolineras>(`${this.baseUrl}/gasolineras`);
  }

  getSalud(): Observable<Tiendas> {
    return this.http.get<Tiendas>(`${this.baseUrl}/salud`);
  }

  // getRestaurants(): Observable<Restaurante[]>{
  //   return this.http.get<Restaurante[]>(`${this.baseUrl}/restaurantes`)
  // }

  // getRestaurantById(id: string): Observable<Restaurante> {
  //   return this.http.get<Restaurante>(`${this.baseUrl}/restaurantes/${id}`)
  // }
}
