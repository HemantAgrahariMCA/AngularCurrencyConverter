import { Component } from '@angular/core';
import { CurrencyApiDataService } from '../app/services/currency-api-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'currencyConverter';
  currentCurrency: any = [];

  base = 'USD';
  country2 = 'USD';

  result: string = '1';
  constructor(private currencyApiDataService: CurrencyApiDataService) {}
  changeBase(val: string) {
    this.base = val;
    // console.log(this.base);
  }

  toCountry(val1: string) {
    this.country2 = val1;
    // console.log(this.country2);
  }

  convertCurrency() {
    // console.log(this.base);
    // console.log(this.country2);
    this.currencyApiDataService.getCurrencyData(this.base).subscribe((data) => {
      this.currentCurrency = data;
      this.currentCurrency = JSON.stringify(data);
      this.currentCurrency = JSON.parse(this.currentCurrency);
      console.log(this.currentCurrency);
      // this.result=this.currentCurrency.rates.INR
      if (this.country2 == 'USD') {
        this.result = this.currentCurrency.rates.USD;
      }

      if (this.country2 == 'INR') {
        this.result = this.currentCurrency.rates.INR;
      }

      if (this.country2 == 'EUR') {
        this.result = this.currentCurrency.rates.EUR;
      }
    });
  }
}
