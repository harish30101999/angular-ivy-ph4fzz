import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from './payment';

@Injectable({
  providedIn: 'root',
})

export class PaymentService {

  constructor(private httpClient: HttpClient) {}

  public getAllPaymentService() {
    return this.httpClient.get('http://localhost:8080/payment/');
  }

  public getPaymentService(id) {
    return this.httpClient.get('http://localhost:8080/payment/' + id);
  }

  public deletePaymentService(id) {
    return this.httpClient.delete('http://localhost:8080/payment/' + id);
  }
  
  public createPaymentService(payment: Payment) {
   // alert(JSON.stringify(ticketbooking));
    const headers = { 'content-type': 'application/json' };
    return this.httpClient.post(
      'http://localhost:8080/payment/',
      JSON.stringify(payment),
      {
        headers: headers,
      }
    );
  }
  
  public updatePaymentService(id, payment: Payment) {
    const headers = { 'content-type': 'application/json' };
    return this.httpClient.put(
      'http://localhost:8080/payment/' + id,
      JSON.stringify(payment),
      {
        headers: headers,
      }
    );
  }
}
