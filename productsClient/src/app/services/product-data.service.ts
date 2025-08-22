import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  url:string = "http://localhost:8082/api/products/";
  constructor(private _httpclient:HttpClient) { }

  getProducts():any{
    return this._httpclient.get(this.url);
  }

  createProduct(product:any):any{
    return this._httpclient.post(this.url, product);
  }

  updateProduct(product:any):any{
    return this._httpclient.put(this.url, product);
  }

  deleteProduct(id:number):any{
    return this._httpclient.delete(this.url+id);
  }

  
  getProduct(id:number):any{
    return this._httpclient.get(this.url+id);
  }
}
