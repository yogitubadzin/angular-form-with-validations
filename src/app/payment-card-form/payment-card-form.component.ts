import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateFormControl } from '../date-form-control';

@Component({
  selector: 'app-payment-card-form',
  templateUrl: './payment-card-form.component.html',
  styleUrls: ['./payment-card-form.component.css']
})
export class PaymentCardFormComponent implements OnInit {
  paymentCardForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16)
    ]),
    expiration: new DateFormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)
    ]),
    securityCode: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3)
    ])
  });

  constructor() {
    console.log(this.paymentCardForm.get('name'));
  }

  ngOnInit() {}

  onSubmit() {
    console.log('Form was submitted');
  }

  onResetClick() {
    this.paymentCardForm.reset();
  }
}
