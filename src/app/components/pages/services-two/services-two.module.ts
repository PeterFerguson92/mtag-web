import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { ServicesTwoRoutingModule } from './services-two-routing.module';
import { ServicesTwoComponent } from './services-two.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    ServicesTwoComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    ServicesTwoRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule
  ]
})
export class ServicesTwoModule { }
