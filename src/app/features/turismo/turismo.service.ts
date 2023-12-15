import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Turismo } from 'src/app/shared/interfaces/info.interface';
import { environments } from 'src/environments/environments.prod';

@Injectable({
  providedIn: 'root'
})
export class TurismoService {
  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) { }

  getTurismo(): Observable<Turismo[]> {
    return this.http.get<Turismo[]>(`${this.baseUrl}/turismo`)
  }
}
