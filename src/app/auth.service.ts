import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthService {

  url = `http://localhost:3000`;

  constructor(private http: HttpClient) {}

  saveToken(): Observable<any> {
    this.authentication().subscribe(auth => {
      this.setToken(auth.token);
    });
    return of(this.isAuthenticated());
  }

  setToken(token: string): boolean {
    localStorage.setItem('token', token);
    return localStorage.getItem('token') !== null;
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  authentication(): Observable<any> {
    const urlAuth = `${this.url}/auth`;
    return this.http.get<any>(urlAuth, httpOptions);
  }

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  getUser(): Observable<any> {
    const urlUser = `${this.url}/user`;
    return this.http.get<any>(urlUser, httpOptions);
  }

  get401Test(): Observable<any> {
    const url401 = `http://www.mocky.io/v2/5dd347f733000075007a4073`;
    return this.http.get<any>(url401, httpOptions);
  }

}
