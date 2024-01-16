import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MEMBERSHIP_SEX, MEMBERSHIP_TYPES } from 'costants';

@Component({
  selector: 'app-membership-content',
  templateUrl: './membership-content.component.html',
  styleUrls: ['./membership-content.component.css'],
})
export class MembershipContentComponent implements OnInit {
  addMemberForm: FormGroup;
  memberSex = MEMBERSHIP_SEX;
  membershipTypes = MEMBERSHIP_TYPES;

  constructor(private formBuilder: FormBuilder) {
    this.addMemberForm = this.formBuilder.group({
      name: ['', Validators.required],
      middleName: ['', Validators.required],
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

  onSubmit(): void {
    const info: any = {};
    Object.keys(this.addMemberForm.controls).forEach((control: string) => {
      info[control] = this.getFormControl(control).value.trim();
    });
    return info;
  }
}
