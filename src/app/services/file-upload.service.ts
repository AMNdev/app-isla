import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';


@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private baseUrl: string = environments.baseUrl;
  private token = localStorage.getItem('token') || '';
  private headers = {
        headers: {
          'x-token': this.token,
        },
      }

  constructor(private http: HttpClient) {}

  async actualizarFoto(
    archivo: File,
    tipo: 'instrucciones' | 'playas',
    id: string
  ) {
    try {
      const url = `${this.baseUrl}/api/uploads/${tipo}/${id}`;
      const formData = new FormData();
      formData.append('imagen', archivo);

      // const nuevoResp = this.http.put(url,formData, this.headers)


      const resp = await fetch(url, {
        method: 'PUT',
        headers: {
          'x-token': localStorage.getItem('token') || '',
        },
        body: formData,
      });

      const data = await resp.json();
      // console.log(data);

      if (data.ok) {
        return data.nombreArchivo;
      } else {
        console.log(data.msg);
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }

}
