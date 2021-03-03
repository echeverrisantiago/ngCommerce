import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private headers: any;

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
   }

  register(user: any){
    return this.http.post(`${environment.laravel_api}users/register`, user, {headers: this.headers});
  }

  login(email: string, password: string){

    const data = {
      email: email,
      password: password
    }
    return this.http.post<string>(`${environment.laravel_api}users/login`,data);
  }

  verifyToken(){
    return this.http.get(`${environment.laravel_api}`, {headers: this.headers});
  }

}
