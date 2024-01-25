import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TRANSACTION_TYPES } from 'costants';
import { ApiService } from 'src/app/components/data/service/api.service';

@Component({
  selector: 'app-online-content',
  templateUrl: './online-content.component.html',
  styleUrls: ['./online-content.component.css']
})
export class OnlineContentComponent implements OnInit {
  showOkMessage = false;
  showErrorMessage = false;
  types = TRANSACTION_TYPES;
  suggestedAmountList = ['10', '20', '50', '100', '500']
  transactionForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {
    this.transactionForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      postcode: ['', [Validators.required]],
      houseNumber: ['', [Validators.required]],
      type: [this.types[0], [Validators.required]],
      amount: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  getFormControl(fControlName: string): any {
    return this.transactionForm.get(fControlName);
  }

  isSubmitDisabled(): any {
    return !this.transactionForm.valid;
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
    const info: any = {source: 'WEBSITE', type: 'OFFERING'};
    Object.keys(this.transactionForm.controls).forEach((control: string) => {
      if (control === 'amount')
      {
        info[control] = parseFloat(this.getFormControl(control).value);
      } else
      {
        info[control] = this.getFormControl(control).value.trim();
      }
    });
    this.process(info);
    return info;
  }

  process(info: any): void {
    this.apiService.createTransaction(info).subscribe(
      (data: any) => {
        this.showOkMessage = true;
        this.clearFields();
        this.clearNotification();
      },
      (error: any) => {
        console.log(error);
        this.showErrorMessage = true;
        this.clearNotification();
      }
    );
  }

  clearNotification(): void {
    setTimeout(
      // tslint:disable-next-line:typedef
      function(this: any) {
        this.showOkMessage = false;
        this.showErrorMessage = false;
      }.bind(this),
      3000
    );
  }

  clearFields(): void {
    Object.keys(this.transactionForm.controls).forEach((key) => {
      this.transactionForm.controls[key].reset();
    });
  }

}
