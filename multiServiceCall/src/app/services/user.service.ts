import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpClient:HttpClient) { }

  getUserData() {
    return this._httpClient.get('http://localhost:8082/api/greet?userName=Nithya');
  }
}
