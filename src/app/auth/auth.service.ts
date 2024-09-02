import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Asegúrate de que AuthService esté disponible en toda la aplicación
})
export class AuthService {
  private apiUrl = 'http://dentalregisbr.000.pe/login.php'; // URL de tu API

  constructor(private http: HttpClient) {} // Inyecta HttpClient

  login(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
