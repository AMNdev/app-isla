import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Playas } from 'src/app/shared/interfaces/playas.interface';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class PlayasService {
  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) {}

  getPlayas(): Observable<Playas[]> {
    return this.http.get<Playas[]>(`${this.baseUrl}/playas`);
  }

  getPlayaById(id: string): Observable<Playas>  {
    return this.http.get<Playas>(`${this.baseUrl}/playas/${id}`)
  }
}
