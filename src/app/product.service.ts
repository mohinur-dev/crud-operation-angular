import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080';

  constructor(private client: HttpClient) { }

  ngOnInit() {
    this.baseUrl = 'http://localhost:8080/show';
  }

  getProduct() {
    this.baseUrl = 'http://localhost:8080/show';
    return this.client.get(this.baseUrl);
  }

  getProductById(id: number): Observable<Product> {
    this.baseUrl = 'http://localhost:8080/';
    return this.client.get<Product>(`${this.baseUrl}product/${id}`)
  }

  insertProduct(product:Product) {
    this.baseUrl = 'http://localhost:8080/save'
    return this.client.post(this.baseUrl, product);
  }

  updateProduct(product: Product) {
    this.baseUrl = 'http://localhost:8080/update';
    return this.client.post(this.baseUrl, product);
  }

  removeProduct(product: Product) {
    this.baseUrl = 'http://localhost:8080/delete';
    return this.client.post(this.baseUrl, product);
  }
}
