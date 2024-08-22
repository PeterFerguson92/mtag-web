import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DEPARTMENTS, MEMBERSHIP_SEX, MEMBERSHIP_TYPES } from 'costants';
import { ApiService } from 'src/app/components/data/service/api.service';

@Component({
  selector: 'app-membership-content',
  templateUrl: './membership-content.component.html',
  styleUrls: ['./membership-content.component.css'],
})
export class MembershipContentComponent implements OnInit {
  addMemberForm: FormGroup;
  memberSex = MEMBERSHIP_SEX;
  membershipTypes = MEMBERSHIP_TYPES;
  departments = DEPARTMENTS;
  showOkMessage = false;
  showErrorMessage = false;
  showDepartments = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {
    this.addMemberForm = this.formBuilder.group({
      name: ['', Validators.required],
      middleName: [''],
      surname: ['', Validators.required],
      postcode: ['', Validators.required],
      house_number: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.email],
      phone: ['', [Validators.required]],
      sex: [this.memberSex[0], [Validators.required]],
      memberType: [this.membershipTypes[0], [Validators.required]],
      departments: [this.departments[0].key, [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  getFormControl(fControlName: string): any {
    return this.addMemberForm.get(fControlName);
  }

  isSubmitDisabled(): any {
    return !this.addMemberForm.valid;
  }

  onSubmit(): void {
    const info: any = { origin: 'WEBSITE' };
    const key = 'department';
    Object.keys(this.addMemberForm.controls).forEach((control: string) => {
      if (control === 'memberType') {
        if (this.getFormControl(control).value === 'VISITOR') {
          info[key] = null;
        } else {
          info[key] = this.getFormControl('departments').value;
        }
        info[control] = this.getFormControl(control).value.toString().trim();
      } else {
        if (control !== 'departments') {
          info[control] = this.getFormControl(control).value.toString().trim();
        }
      }
    });
    this.process(info);
    return info;
  }

  process(info: any): void {
    const url = '/servicemanagement/member';
    this.apiService.createResource(url, info).subscribe(
      () => {
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
      function (this: any) {
        this.showOkMessage = false;
        this.showErrorMessage = false;
        if (result) {
          this.router.navigate(['/']);
        }
      }.bind(this),
      3000
    );
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

  clearFields(): void {
    Object.keys(this.addMemberForm.controls).forEach((key) => {
      this.addMemberForm.controls[key].reset();
    });
  }

  onSelectionChange(value: any): void {
    this.showDepartments = value === 'FULL MEMBER';
  }
}
