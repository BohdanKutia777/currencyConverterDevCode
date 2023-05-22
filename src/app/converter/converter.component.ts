import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
})
export class ConverterComponent implements OnInit {
  conversionHistory: any[] = [];
  exchangeRates: any;
  fromAmount: number = 1;
  fromCurrency: string = 'UAH';
  toAmount: number = 0;
  toCurrency: string = 'USD';

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    this.currencyService.getExchangeRates().subscribe((data: any) => {
      this.exchangeRates = data.rates;
      this.convert();
    });
  }
  convert() {
    const fromRate = this.exchangeRates[this.fromCurrency];
    const toRate = this.exchangeRates[this.toCurrency];
    this.toAmount = (this.fromAmount / fromRate) * toRate;
    this.toAmount = +this.toAmount.toFixed(4);
    const conversion = {
      fromAmount: this.fromAmount,
      fromCurrency: this.fromCurrency,
      toAmount: this.toAmount,
      toCurrency: this.toCurrency,
    };
    this.conversionHistory.push(conversion);
  }

  onFromAmountChange() {
    this.convert();
  }

  onToAmountChange() {
    const fromRate = this.exchangeRates[this.fromCurrency];
    const toRate = this.exchangeRates[this.toCurrency];
    this.fromAmount = (this.toAmount / toRate) * fromRate;
    this.fromAmount = +this.fromAmount.toFixed(4);
  }

  onCurrencyChange() {
    this.convert();
  }
}
