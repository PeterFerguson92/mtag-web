import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { DonationGridRoutingModule } from './donation-grid-routing.module';
import { DonationGridComponent } from './donation-grid.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    DonationGridComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    DonationGridRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule
  ]
})
export class DonationGridModule { }
