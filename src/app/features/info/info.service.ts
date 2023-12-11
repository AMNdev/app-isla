import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';
import { Observable, } from 'rxjs';
import { Info, Instrucciones, Piso } from 'src/app/shared/interfaces/info.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) {}

  getInfoList(): Observable<Info[]> {
    return this.http.get<Info[]>(`${this.baseUrl}/info`);
  }

  getInfoByID(id: string) {
    return this.http.get(`${this.baseUrl}/info?id=${id}`);
  }

  getPiso(): Observable<Piso> {
    return this.http.get<Piso>(`${this.baseUrl}/info/piso`)
  }

  getInstrucciones(): Observable<Instrucciones> {
    return this.http.get<Instrucciones>(`${this.baseUrl}/info/instrucciones`)
   }
}
