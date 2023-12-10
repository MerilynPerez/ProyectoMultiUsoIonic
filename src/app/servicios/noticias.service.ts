import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private apiUrl = 'https://remolacha.net/wp-json/wp/v2/posts?search=digeset';

  constructor(private http: HttpClient) { }

  obtenerNoticias(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}