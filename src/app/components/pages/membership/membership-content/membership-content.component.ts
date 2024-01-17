import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MEMBERSHIP_SEX, MEMBERSHIP_TYPES } from 'costants';
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
  showOkMessage = false;
  showErrorMessage = false;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {
    this.addMemberForm = this.formBuilder.group({
      name: ['', Validators.required],
      middleName: [''],
      surname: ['', Validators.required],
      phone: ['', [Validators.required]],
      sex: [this.memberSex[0], [Validators.required]],
      memberType: [this.membershipTypes[0], [Validators.required]],
    });
  }

  ngOnInit(): void {}

  getFormControl(fControlName: string): any {
    return this.addMemberForm.get(fControlName);
  }

  isSubmitDisabled(): any {
    return !this.addMemberForm.valid;
  }

  onSubmit(): void {
    const info: any = {};
    Object.keys(this.addMemberForm.controls).forEach((control: string) => {
      info[control] = this.getFormControl(control).value.trim();
    });
    this.process(info);
    return info;
  }

  process(info: any): void {
    this.apiService.createMember(info).subscribe(
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
    Object.keys(this.addMemberForm.controls).forEach((key) => {
      this.addMemberForm.controls[key].reset();
    });
  }
}
