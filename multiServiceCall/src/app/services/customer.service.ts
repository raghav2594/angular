import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _httpClient:HttpClient) { }

  getCustomerData() {
    return this._httpClient.get('https://www.w3schools.com/angular/customers.php');
  }
}
