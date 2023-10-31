import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = environment.apiUrl + "/cart";
  private apiUrlcheckout = environment.apiUrl + "/checkout";
  constructor(private http:HttpClient){}

  getProduct(product:Product): Observable<Product>{
    return this.http.post<Product>(this.apiUrl,'/cart');
  }

  addToCart(product:Product): Observable<Product>{
    return this.http.post<Product>(this.apiUrl,product);
  }

  getCartItem() : Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }

  clearCart(): Observable<void> {
    return this.http.delete<void>(this.apiUrl);
  }

  checkout(product:Product[]): Observable<void>{
    return this.http.post<void>(this.apiUrlcheckout,product);
  } 
}
