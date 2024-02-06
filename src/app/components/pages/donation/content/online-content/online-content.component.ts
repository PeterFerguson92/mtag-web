import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MEMBERSHIP_TYPES, TRANSACTION_TYPES } from 'costants';
import { StripeCardNumberComponent, StripeService } from 'ngx-stripe';
import { ApiService } from 'src/app/components/data/service/api.service';
import {
  StripeCardElementChangeEvent,
  StripeCardElementOptions,
  StripeElementsOptions,
} from '@stripe/stripe-js';
import { StripeInstance } from 'ngx-stripe';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-online-content',
  templateUrl: './online-content.component.html',
  styleUrls: ['./online-content.component.css'],
})

export class OnlineContentComponent implements OnInit {
  showOkMessage = false;
  showErrorMessage = false;
  showSpinner = false;
  showSpecificType = false;
  types = TRANSACTION_TYPES;
  membershipTypes = MEMBERSHIP_TYPES;
  suggestedAmountList = ['10', '20', '50', '100', '500'];
  transactionForm: FormGroup;
  @ViewChild(StripeCardNumberComponent) card!: StripeCardNumberComponent;
  paymentHandler: any = null;
  stripe!: StripeInstance;
  isStripeLoaded = false;

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0',
        },
      },
    },
  };

  public elementsOptions: StripeElementsOptions = {
    locale: 'en',
  };
  constructor(
    private router: Router,
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private stripeService: StripeService
  ) {
    this.transactionForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      postcode: ['', [Validators.required]],
      houseNumber: ['', [Validators.required]],
      memberType: [this.membershipTypes[0], [Validators.required]],
      type: [this.types[0], [Validators.required]],
      specificTransactionType: ['', Validators.required],
      amount: ['', [Validators.required]],
      cvc: ['', [Validators.required]],
      expiry: ['', [Validators.required]],
      cardNumber: ['', [Validators.required]],
      message: [''],
    });
  }

  ngOnInit(): void {
    this.apiService.getResource('/finance/stripe-key').subscribe(
      (data: any) => {
        if (data.status === 'success')
        {
          this.stripeService.changeKey(data.key);
          this.isStripeLoaded = true;
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  onSelectionChange(value: any): void {
    this.showSpecificType = value === 'OTHER';
}

  // tslint:disable-next-line:typedef
  onChange(ev: StripeCardElementChangeEvent) {
    const displayError = document.getElementById('card-errors');
  }

  getFormControl(fControlName: string): any {
    return this.transactionForm.get(fControlName);
  }

  isSubmitDisabled(): any {
    // return !this.transactionForm.valid;
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

  pay(): void {
    this.showSpinner = true;
    const data = {
      amount: this.getFormControl('amount').value,
      type: this.getFormControl('type').value,
    };
    this.apiService
      .createPaymentIntent(data)
      .pipe(
        switchMap((pi) =>
          this.stripeService.confirmCardPayment(pi.client_secret as string, {
            payment_method: {
              card: this.card.element,
              billing_details: {
                name: this.getFormControl('name').value,
              },
            },
          })
        )
      )
      .subscribe(
        async (result: any) => {
          this.processTransaction();
        },
        (error: any) => {
          console.log(error);
          this.showErrorMessage = true;
          this.clearNotification(false);
        }
      );
  }

  processTransaction(): void {
    const info: any = { source: 'WEBSITE', type: 'OFFERING' };
    Object.keys(this.transactionForm.controls).forEach((control: string) => {
      if (control === 'amount') {
        info[control] = parseFloat(this.getFormControl(control).value);
      } else {
        info[control] = this.getFormControl(control).value.trim();
      }
    });
    const url = '/finance/transaction';
    this.apiService.createResource(url, info).subscribe(
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
}
