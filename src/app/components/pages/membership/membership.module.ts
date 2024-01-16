import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MembershipRoutingModule } from './membership-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MembershipComponent } from './membership.component';
import { MembershipInfoComponent } from './membership-info/membership-info.component';
import { MembershipContentComponent } from './membership-content/membership-content.component';


@NgModule({
  declarations: [MembershipComponent, MembershipInfoComponent, MembershipContentComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MembershipRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
  ]
})
export class MembershipModule { }
