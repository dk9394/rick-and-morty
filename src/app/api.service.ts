import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string = environment.apiURL;

  constructor(private http: HttpClient) {}

  getAll(page?: number): Observable<any> {
    return this.http.get<any>(this.url, { params: { page: page.toString() } });
  }
}
