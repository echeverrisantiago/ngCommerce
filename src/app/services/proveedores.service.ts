import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  private headers: any;

  constructor(
    private http: HttpClient
    ) {
      const token = localStorage.getItem('token');
      this.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
     }

     index(){
      return this.http.get<any[]>(`${environment.laravel_api}providers`, {headers: this.headers});
     }

     getProduct(id: any){
      return this.http.get<any[]>(`${environment.laravel_api}provider/${id}`, {headers: this.headers});
     }

     store(data: any){
      return this.http.post(`${environment.laravel_api}providers/create`, data, {headers: this.headers});
     }

     update(data: any){
      return this.http.post(`${environment.laravel_api}providersUpdate`, data, {headers: this.headers});
     }

     delete(data: number){
      return this.http.delete(`${environment.laravel_api}provider/${data}`, {headers: this.headers});
     }
}
