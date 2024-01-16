import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { MinistryDetailsRoutingModule } from './ministry-details-routing.module';
import { MinistryDetailsComponent } from './ministry-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { DetailChartComponent } from './detail-chart/detail-chart.component';
import { RelatedComponent } from './related/related.component';


@NgModule({
  declarations: [
    MinistryDetailsComponent,
    ContentComponent,
    DetailChartComponent,
    RelatedComponent
  ],
  imports: [
    CommonModule,
    MinistryDetailsRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    FormsModule,
    ChartsModule
  ]
})
export class MinistryDetailsModule { }
