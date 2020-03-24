import { Injectable } from '@angular/core';
import { Product } from '../modeles/product';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/internal/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  availableBrands = ['Dell', 'HP', 'Apple', 'Asus'];
  availableTypes = ['Portable', 'Fixe', 'Tablette Hybride'];
  availableCategories = ['Gaming', 'Bureautique', 'Premier Prix'];
  urlApi = "http://localhost:3000/computers";

  constructor(private httpClient : HttpClient) { }

  getAllProducts() : Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.urlApi).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getOneById(id:number) : Observable<Product> {
    return this.httpClient.get<Product>(this.urlApi+'/'+id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  add(product:Product) : Observable<Product> {
    product.dateEntreStock = new Date;
    return this.httpClient.post<Product>(this.urlApi, product).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  editProduct(product:Product):Observable<Product>{
    return this.httpClient.put<Product>(this.urlApi+'/'+product.id, product).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  delete(product : Product) : Observable<Product> {
    return this.httpClient.delete<Product>(this.urlApi+'/'+product.id);
  }

  handleError(error){
    let errorMessage='';
    if ( error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else{
      errorMessage = `Error Code : ${error.status}\nMessage : ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
