import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UppercaseConterverServiceService {

  constructor(private _httpClient:HttpClient) { }

  convertToUpperCase(message: string): any {
    return this._httpClient.post('http://localhost:8082/api/uppercase', message);
  }
}
