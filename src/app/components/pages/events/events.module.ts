import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    EventsComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule
  ]
})
export class EventsModule { }
