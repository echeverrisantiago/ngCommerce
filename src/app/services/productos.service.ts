import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
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
      return this.http.get<any[]>(`${environment.laravel_api}products`, {headers: this.headers});
     }

     getProduct(id: any){
      return this.http.get<any[]>(`${environment.laravel_api}product/${id}`, {headers: this.headers});
     }

     getProductInfo(id: any){
      return this.http.get<any[]>(`${environment.laravel_api}productInfo/${id}`, {headers: this.headers});
     }

     store(data: any){
      return this.http.post(`${environment.laravel_api}products/create`, data, {headers: this.headers});
     }

     update(data: any){
      return this.http.post(`${environment.laravel_api}productsUpdate`, data, {headers: this.headers});
     }

     delete(data: number){
      return this.http.delete(`${environment.laravel_api}product/${data}`, {headers: this.headers});
     }
}
