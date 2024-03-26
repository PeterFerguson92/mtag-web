import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { EventsSocialComponent } from './events-social.component';
import { EventsSocialRoutingModule } from './events-social-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [EventsSocialComponent, ContentComponent],
  imports: [
    EventsSocialRoutingModule,
    CommonModule,
    SharedModule,
    CommonModule,
    NgbModule,
    NgxPaginationModule
  ]
})
export class EventsSocialModule { }
