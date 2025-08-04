import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private _httpClient:HttpClient) {}

  public getCountries():any {
    return this._httpClient.get('https://api.countrylayer.com/v2/all?access_key=ed8bf95cb654ecfb13a44ea5f5e8f1dd');
  }
}
