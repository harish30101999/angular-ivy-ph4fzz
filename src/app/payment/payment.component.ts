import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Payment } from './payment';
import { PaymentService } from './payment.service';



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
 
  register = [];
  model = new Payment();
  form: FormGroup;
  submitted = false;
payment: any[];

  constructor(private paymentService: PaymentService) {}

  ngOnInit() 
  
  {
    this.getAllPayment();
  }
  
  public getAllPayment() {
    this.paymentService
      .getAllPaymentService()
      .subscribe((x: any[]) => {
        this.payment = x;
      });
  }
  editPayment(id: string) {
    alert(id);
    this.paymentService
    .getPaymentService(id)
    .subscribe((data: any) => (this.model = data));

  }
 
 
  deletePayment(id) {
    alert(id);
    this.paymentService
      .deletePaymentService(id)
      .subscribe((data) => {
        this.getAllPayment();
      });
  }

  addPayment() {
     alert(JSON.stringify(this.model));
    if (!this.model.id) {
      // alert(JSON.stringify(this.model));
      this.paymentService
        .createPaymentService(this.model)
        .subscribe((data) => {
          this.getAllPayment();
          this.model = new Payment();
        });
    } else {
      // alert(JSON.stringify(this.model));
      this.paymentService
        .updatePaymentService(this.model.id, this.model)
        .subscribe((data) => {
          this.getAllPayment();
          this.model = new Payment();
        });
    }
    
  }
 
}
