import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VolunteerDetailsRoutingModule } from './volunteer-details-routing.module';
import { VolunteerDetailsComponent } from './volunteer-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    VolunteerDetailsComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    VolunteerDetailsRoutingModule,
    SharedModule
  ]
})
export class VolunteerDetailsModule { }
