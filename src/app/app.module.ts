import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ConversionHistoryComponent } from './convertHistory/conversionHistory.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ConverterComponent } from './converter/converter.component';
import { CurrencyService } from './services/currency.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConverterComponent,
    ConversionHistoryComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [CurrencyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
