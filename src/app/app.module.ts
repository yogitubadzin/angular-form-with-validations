import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PaymentCardFormComponent } from './payment-card-form/payment-card-form.component';
import { SharedInputComponent } from './shared-input/shared-input.component';

@NgModule({
  declarations: [AppComponent, PaymentCardFormComponent, SharedInputComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
