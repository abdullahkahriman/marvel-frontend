import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  baseUrl = 'https://marver-backend-go.herokuapp.com/api'

  constructor(private http: HttpClient) { }

  getCharacters(page: number = environment.limit): Observable<[]> {
    let url = `${this.baseUrl}/characters`;
    if (page > environment.limit)
      url += `/${page}`

    return this.http.get<[]>(url);
  }
}
