import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    return this.http.get<Localizacion[]>(`${this.baseUrl}/direcciones`);
  }

  getNormas(): Observable<Norma[]> {
    return this.http.get<Norma[]>(`${this.baseUrl}/normas`);
  }

  deleteNorma(toDelete: Norma) {
    console.log(`Borrando - id: ${toDelete.id}, ${toDelete.norma}`);
    return this.http.delete(`${this.baseUrl}/normas/${toDelete.id}`).subscribe(
      // TODO: notificar el borrado de la norma al usuario (matdialog o algo mejor?)
      () => {
        alert(`eliminada con éxito`);
      }
    );
  }

  setNormas(nuevaNorma: Norma) {
    return this.http
      .post<Norma>(`${this.baseUrl}/normas`, nuevaNorma)
      .subscribe((resp) => {
        alert(`Norma creada con éxito:
        ${resp.id} - ${resp.norma}`);
      });
  }
  // TODO: manejar los errores
}
