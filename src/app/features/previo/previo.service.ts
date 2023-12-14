import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Localizacion } from 'src/app/shared/interfaces/previo.interface';
import { environments } from 'src/environments/environments.prod';

@Injectable({
  providedIn: 'root',
})
export class PrevioService {
  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) {}

  getDirecciones(): Observable<Localizacion[]> {
    return this.http.get<Localizacion[]>(`${this.baseUrl}/direcciones`);
  }

  getNormas(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/normas`);
  }
}
