import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurante } from 'src/app/shared/interfaces/restaurantes.interface';
import { environments } from 'src/environments/environments.prod';


@Injectable({
  providedIn: 'root',
})
export class ComerService  {

  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<Restaurante[]>{
    return this.http.get<Restaurante[]>(`${this.baseUrl}/restaurantes`)
  }

  getRestaurantById(id: string): Observable<Restaurante> {
    return this.http.get<Restaurante>(`${this.baseUrl}/restaurantes/${id}`)
  }



}
