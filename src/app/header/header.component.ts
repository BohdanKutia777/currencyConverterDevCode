import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  exchangeRates: any;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    this.currencyService.getExchangeRates().subscribe((data: any) => {
      this.exchangeRates = data;
    });
  }
}
