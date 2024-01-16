import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlyrModule } from 'ngx-plyr';

import { SermonDetailsRoutingModule } from './sermon-details-routing.module';
import { SermonDetailsComponent } from './sermon-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { FeaturesComponent } from './features/features.component';
import { AboutTextComponent } from './about-text/about-text.component';
import { TabFormComponent } from './tab-form/tab-form.component';


@NgModule({
  declarations: [
    SermonDetailsComponent,
    ContentComponent,
    FeaturesComponent,
    AboutTextComponent,
    TabFormComponent
  ],
  imports: [
    CommonModule,
    SermonDetailsRoutingModule,
    SharedModule,
    PlyrModule,
    NgbModule
  ]
})
export class SermonDetailsModule { }
