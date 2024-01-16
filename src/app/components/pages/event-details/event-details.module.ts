import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountdownModule } from "ng2-countdown-timer";

import { EventDetailsRoutingModule } from './event-details-routing.module';
import { EventDetailsComponent } from './event-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    EventDetailsComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    EventDetailsRoutingModule,
    SharedModule,
    NgbModule,
    CountdownModule
  ]
})
export class EventDetailsModule { }
