import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Usuario } from 'src/app/shared/interfaces/usuario.interface';
import { environments } from 'src/environments/environments';

const base_url = environments.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  loginUser(formData: Usuario) {
    console.log('haciendo login');
    return this.http
      .post(`${base_url}/api/login`, formData)
      .pipe(tap((resp: any) => localStorage.setItem('token', resp.token)));
  }

  validarToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';

    return this.http
      .get(`${base_url}/api/login/renew`, {
        headers: {
          'x-token': token,
        },
      })
      .pipe(
        tap((resp: any) => {
          localStorage.setItem('token', resp.token);
        }),
        map((resp) => resp.ok),
        catchError((err) => of(false))
      );
  }
}
