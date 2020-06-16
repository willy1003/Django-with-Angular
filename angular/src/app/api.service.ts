import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({ 'content-type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<any> {
    return this.http.get(this.baseurl + '/movies', { headers: this.httpHeaders })

  }
}
