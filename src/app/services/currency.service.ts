import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private apiUrl = 'https://open.er-api.com/v6/latest/UAH';

  constructor(private http: HttpClient) {}

  getExchangeRates() {
    return this.http.get(this.apiUrl);
  }
}
