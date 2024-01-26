import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TRANSACTION_TYPES } from 'costants';
import { ApiService } from 'src/app/components/data/service/api.service';

@Component({
  selector: 'app-online-content',
  templateUrl: './online-content.component.html',
  styleUrls: ['./online-content.component.css'],
})
export class OnlineContentComponent implements OnInit {
  showOkMessage = false;
  showErrorMessage = false;
  showSpinner = false;
  types = TRANSACTION_TYPES;
  suggestedAmountList = ['10', '20', '50', '100', '500'];
  transactionForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
  ) {
    this.transactionForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      postcode: ['', [Validators.required]],
      houseNumber: ['', [Validators.required]],
      type: [this.types[0], [Validators.required]],
      amount: ['', [Validators.required]],
      cvc: ['', [Validators.required]],
      expiry: ['', [Validators.required]],
      cardNumber: ['', [Validators.required]],
      message: [''],
    });
  }

  ngOnInit(): void {}

  getFormControl(fControlName: string): any {
    return this.transactionForm.get(fControlName);
  }

  isSubmitDisabled(): any {
    //return !this.transactionForm.valid;
  }

  selectAmount(amount: string): void {
    this.transactionForm.get('amount')?.setValue(amount);
    this.transactionForm.get('amount')?.markAsDirty();
  }

  getValidationClass(fControlName: any): any {
    const fControl = this.getFormControl(fControlName);
    if (fControl.dirty && fControl.valid) {
      if ('email' === fControlName) {
        return null;
      }
      return { validInput: true };
    }

    if (fControl.dirty && !fControl.valid) {
      return { invalidInput: true };
    }
  }

  onSubmit(): void {
    const info: any = { source: 'WEBSITE', type: 'OFFERING' };
    // Object.keys(this.transactionForm.controls).forEach((control: string) => {
    //   if (control === 'amount') {
    //     info[control] = parseFloat(this.getFormControl(control).value);
    //   } else {
    //     info[control] = this.getFormControl(control).value.trim();
    //   }
    // });
    // this.process(info);

    this.pay();
    return info;
  }

  process(info: any): void {
    this.showSpinner = true;
    this.apiService.createTransaction(info).subscribe(
      (data: any) => {
        this.showOkMessage = true;
        this.clearFields();
        this.clearNotification(true);
      },
      (error: any) => {
        console.log(error);
        this.showErrorMessage = true;
        this.clearNotification(false);
      }
    );
  }

  clearNotification(result: boolean): void {
    setTimeout(
      // tslint:disable-next-line:typedef
      function(this: any) {
        this.showOkMessage = false;
        this.showErrorMessage = false;
        if (result) {
          this.router.navigate(['/']);
        }
      }.bind(this),
      3000
    );
    this.showSpinner = false;
  }

  clearFields(): void {
    Object.keys(this.transactionForm.controls).forEach((key) => {
      this.transactionForm.controls[key].reset();
    });
  }
  pay(): void {
    const data = {
      amount: this.getFormControl('amount').value,
      type: this.getFormControl('type').value,
    };
    this.apiService.createPaymentIntent(data).subscribe(
      async (result: any) => {
        console.log(result);
        // var elements = this.stripe.elements();
        // var card = elements.create('card');
      },
      (error: any) => {
        console.log(error);
        this.showErrorMessage = true;
        this.clearNotification(false);
      }
    );
  }
}
