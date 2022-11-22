import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,PaymentComponent],
  bootstrap:    [ AppComponent]
})
export class AppModule { }
