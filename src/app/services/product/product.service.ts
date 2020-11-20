import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http : HttpClient
  ) { }
  
  public getAllProducts() : Observable<any>{
    return this.http.get('http://localhost:8000/api/getAllProducts',{
      headers: { 'Content-Type': 'application/json'}
    })
  }

  public getAllBestSellers() : Observable<any>{
    return this.http.get('http://localhost:8000/api/getAllBestSellers',{
      headers: { 'Content-Type': 'application/json'}
    })
  }

  public getAllCategories() : Observable<any>{
    return this.http.get('http://localhost:8000/api/getAllCategories',{
      headers: { 'Content-Type': 'application/json'}
    })
  }
}
