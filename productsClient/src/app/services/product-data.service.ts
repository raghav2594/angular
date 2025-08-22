import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private _httpclient:HttpClient) { }

  getProducts():any{
    return this._httpclient.get("http://localhost:8082/api/products");
  }
}
