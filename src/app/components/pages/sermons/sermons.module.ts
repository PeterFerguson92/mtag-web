import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { SermonsRoutingModule } from './sermons-routing.module';
import { SermonsComponent } from './sermons.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    SermonsComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    SermonsRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule
  ]
})
export class SermonsModule { }
