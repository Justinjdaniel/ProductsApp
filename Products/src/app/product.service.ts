import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _productsUrl = "http://localhost:3000/products";

  constructor(private http:HttpClient) { }

  newProduct(item){
    return this.http.post('http://localhost:3000/insert',{"product":item})
    .subscribe((data) => {console.log(data)});
  }

  getProducts(){
    return this.http.get(this._productsUrl);
  }

  updateProduct(productId, productName, productCode, releaseDate, description, price, starRating, imageUrl, id){
    const prod = {
      productId, productName, productCode, releaseDate, description, price, starRating, imageUrl
    };
    return this.http.post(`${this._productsUrl}/update/${id}`, prod)
    .subscribe((data)=> {console.log('Done')});
  }

  editProduct(id){
    return this.http.get(`${this._productsUrl}/edit/${id}`);
  }

  deleteProduct(id){
    return this.http.get(`${this._productsUrl}/delete/${id}`);
  }

}
