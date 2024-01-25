import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DonationRoutingModule } from './donation-routing.module';
import { DonationComponent } from './donation.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { ServiceBlockComponent } from './service-block/service-block.component';
import { OnlineContentComponent } from './content/online-content/online-content.component';


@NgModule({
  declarations: [
    DonationComponent,
    ContentComponent,
    ServiceBlockComponent,
    OnlineContentComponent
  ],
  imports: [
    CommonModule,
    DonationRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DonationModule { }
