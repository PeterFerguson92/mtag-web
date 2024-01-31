import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxStripeModule } from 'ngx-stripe';
import { SharedModule } from '../../shared/shared.module';
import { DonationRoutingModule } from './donation-routing.module';

import { DonationComponent } from './donation.component';
import { ContentComponent } from './content/content.component';
import { ServiceBlockComponent } from './service-block/service-block.component';
import { OnlineContentComponent } from './content/online-content/online-content.component';
import { OfflineContentComponent } from './content/offline-content/offline-content.component';


@NgModule({
  declarations: [
    DonationComponent,
    ContentComponent,
    ServiceBlockComponent,
    OnlineContentComponent,
    OfflineContentComponent
  ],
  imports: [
    CommonModule,
    NgxStripeModule.forRoot(''),
    DonationRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DonationModule { }
