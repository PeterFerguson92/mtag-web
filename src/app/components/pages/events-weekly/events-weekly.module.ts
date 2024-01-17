import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { EventsWeeklyComponent } from './events-weekly.component';
import { EventsWeeklyContentComponent } from './events-weekly-content/events-weekly-content.component';
import { EventsWeeklyRoutingModule } from './events-weekly-routing.module';


@NgModule({
  declarations: [
    EventsWeeklyContentComponent,
    EventsWeeklyComponent
  ],
  imports: [
    CommonModule,
    EventsWeeklyRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule
  ]
})
export class EventsWeeklyModule { }
